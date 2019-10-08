const express = require('express');
const helmet = require('helmet');
const next = require('next');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const frontMatter = require('front-matter');
const marked = require('marked');
const siteConfig = require('./config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Load all of the content in the /content folder into memory
const loadCache = () =>
  fs.readdirSync(path.resolve('content')).reduce(
    (categories, category) => ({
      ...categories,
      [category]: fs
        .readdirSync(path.resolve('content', category))
        .reduce((categoryContent, fileName) => {
          const fileContent = fs.readFileSync(
            path.resolve('content', category, fileName),
            'utf-8'
          );
          const parsedFile = frontMatter(fileContent);
          const slug = fileName.slice(0, -3);
          return {
            ...categoryContent,
            [slug]: {
              ...parsedFile.attributes,
              body: marked(parsedFile.body)
            }
          };
        }, {})
    }),
    {}
  );

const runTheTrap = async () => {
  try {
    await app.prepare();
    const cache = loadCache();
    const server = express();

    // enable helmet to set security headers
    server.use(helmet());

    // gzip it!
    server.use(compression());

    // handle authors
    server.get('/author/:slug', (req, res) => {
      const context = {
        slug: req.params.slug
      };
      app.render(req, res, '/author', context);
    });
    server.get('/api/author/:slug', (req, res) => {
      const hit = cache.authors[req.params.slug];
      return hit ? res.json(hit) : res.sendStatus(404);
    });

    // Handle direct year routes
    server.get('/:year(\\d{4})', (req, res) => {
      const context = {
        year: req.params.year,
        mode: req.query.mode
      };
      app.render(req, res, '/year', context);
    });

    // Handle post routes
    server.get('/:year(\\d{4})/:date(\\d{1,2})', (req, res) => {
      const year = req.params.year;
      const date = req.params.date.padStart(2, '0');

      const context = {
        year,
        date,
        mode: req.query.mode
      };
      app.render(req, res, '/post', context);
    });
    server.get('/api/:year(\\d{4})/:date(\\d{1,2})', (req, res) => {
      const year = req.params.year;
      const date = req.params.date.padStart(2, '0');
      const article = cache[year][date];
      if (!article) {
        return res.sendStatus(404);
      }
      const authors = article.author
        .split(',')
        .map(author =>
          author
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
        )
        .map(authorSlug => ({
          ...cache.authors[authorSlug],
          slug: authorSlug
        }));
      return res.json({
        ...article,
        author: authors
      });
    });

    // Handle 2017's routes
    // One year in, and we already have legacy shit to deal with
    if (siteConfig.handleLegacyLinks) {
      server.get('/:date(\\d{1,2})', (req, res) => {
        res.redirect(`/2017/${req.params.date}`);
      });
    }

    // Handle today route
    server.get('/today', (req, res) => {
      let todayDate = new Date(Date.UTC(year, 11, date));
      const lastDate = new Date(Date.UTC(2018, 11, 24));
      if (todayDate > lastDate) {
        todayDate = lastDate;
      }

      const year = todayDate.getFullYear();
      const date = todayDate
        .getDate()
        .toString()
        .padStart(2, '0');
      const context = {
        year,
        date,
        mode: req.query.mode,
        article: cache[year][date]
      };
      app.render(req, res, '/post', context);
    });

    // Handle all basic routes
    server.get('*', (...args) => handle(...args));

    // Start the server itself!
    server.listen(3000, err => {
      if (err) {
        throw err;
      }
      console.log('Listening on http://localhost:3000');
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
runTheTrap();
