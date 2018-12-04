# security.christmas

## Development

To run a development server, run `yarn dev`.

## Deployment

Deploy with `yarn deploy`.

## Create your own!

Fork this project, and change the stuff in `./config.js` to get started. If you find any more React-specific after that,
please submit a pull request that moves those texts etc into `./config.js`.

## Write content

All content is found in the `./content/` folder, categorized by year. If you want to add articles from - let's say 2018,
create a folder named `./content/2018` and start creating Markdown files.

The markdown files should be named `01.md`, `02.md` etc - all the way up to `24.md`. Each article should start with some
metadata in the Frontmatter format - it looks like this:

```yaml
title: Get started with create-react-app
lead: Creating your first React app usually starts off with a 30 minute crash course with Webpack, Babel and a whole lot of stuff not remotely related to React. That all changed with create-react-app.
author: Kristofer Selbekk
links:
  - title: Official site of create-react-app
    link: https://github.com/facebookincubator/create-react-app/
    body: The offical web site of create-react-app
  - title: Learning React with create-react-app
    link: https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc
    body: A 4-part series introducing the basics of React, based on create-react-app
  - title: Automation without config
    link: https://blog.kentcdodds.com/automation-without-config-412ab5e47229
    body: A great article discussing how to create your own create-react-app to suit your own needs
---

```

The `links` are optional, but they tend to add tons of value to the article if you pick the right ones.

### Author pages

See that author field above? That actually maps to an author bio page. To add your own, please create the file
`./content/authors/<your-name-in-kebab-case>.md`. This file should start with similar metadata:

```yaml
name: Kristofer Selbekk
twitter: selbekk
github: selbekk
oneliner: React practice lead at Bekk
image: https://avatars1.githubusercontent.com/u/1307267?s=460&v=4
---

```

Note that the mapping between the author's name and this file name is brittle af, so try to have a normal name, without
any dashes or dots or whatever.

## Hacker mode!

If you want to show all articles, regardless of the date, you can
add `?mode=hacker` to the URL. That will let you access all articles.

## Questions?

Please reach out via [Twitter](https://www.twitter.com/selbekk) or [GitHub](https://www.github.com/selbekk/react-christmas/issues) if you have any questions :)
