import marked from 'marked';
export default {
  title: 'Understanding Webpack and Babel',
  lead: `
Most apps require some kind of build pipeline to bundle your application into downloadable files.
This article will give you a very simple overview over how to get started!
  `,
  body: marked(`
Back in the day, most React tutorials started with a 2 hour course in how to set up a build
pipeline that would support React apps. Then \`create-react-app\` showed up. Now tutorials
are much easier to follow. However, it also had the unfortunate side-effect that many are
afraid whenever they hear the words Webpack and Babel. We can't have that!

## Show me Webpack!

Webpack is a file bundler that takes a dependency graph and bundles it into a single file. In order
to do just that, you'll need a configuration file called \`webpack.config.js\` that looks like this:

\`\`\`javascript
{
  entry: 'src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
}
\`\`\`

You specify where your app's start point is, and where you want the generated file should end up.
That's it! Nothing to be afraid of, right?

## And now - Babel!

Concatenating files won't get you far in the world of React, however. You want that sexy JSX
transformed into code that your browser understands - and that's where Babel comes into play.
Babel is something called a transpiler - it takes some JavaScript (ish), and it transforms it into
regular JavaScript that can be understood by most browsers.

To get started, you create yet another configuration file called \`.babelrc\`. It should look like
this:

\`\`\`javascript
{
  "presets": ["env", "react"]
}
\`\`\`

These two presets do two different things. \`env\` - or \`babel-preset-env\` as its full name is -
rewrites your fancy new arrow functions and rest-spread operators into old school ES5 JavaScript,
so that your code can run on older browsers. The \`react\` preset turns JSX into
\`React.createElement\` function calls - [which we discussed in this article](/10).

## The grand finale - Babel and Webpack together!

Now you have a tool that bundles your app together, and a tool that makes your code able to be parsed by
most browsers. Let's make them work together!

Webpack has this concept of loaders, which lets you run your code through other tools before it
bundles all the files into one. Let's set that up!

\`\`\`javascript
{
  entry: 'src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /.js$/, use: 'babel-loader' }],
  },
}
\`\`\`

In layman's terms, this basically says, "For each file that ends with \`.js\`, run it through Babel."
We have already told Babel what to do in \`.babelrc\`, so there's not anything else to specify here.
In other words - we're done! With ~10 lines of code, we're ready to write React without a single
boilerplate in sight. Pretty cool, huh?

## Main takeaways

There is much more you can do with both Webpack and Babel, but it doesn't mean you need it to get
started. The setup above (plus a few \`npm install\`s) will get you going in no time! So next time
you see a webpack config, don't fret - just remember that it's an entry point, a place to put
your bundled file(s) and some loaders that will trigger other tools. And that's it.

## Bonus: Webpack 4 is coming

The fourth version of Webpack is just around the corner, and comes with a really cool "mode"
feature, that let's you build for development or production with a single property. [Check out this
tweet!](https://twitter.com/TheLarkInn/status/941431327890358272)
  `),
  resources: [
    {
      title: 'The webpack docs',
      link: 'https://webpack.js.org/concepts/',
      body: 'The best place to start if you want to learn more about Webpack!',
    },
    {
      title: 'Meet create-react-app\'s webpack config',
      link: 'https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js',
      body: 'create-react-app has a pretty advanced webpack config - but it\'s very well documented. Read and discover!',
    },
    {
      title: 'Survive Webpack',
      link: 'https://survivejs.com/webpack/foreword/',
      body: 'Want to become a webpack master? Then this book is for you! Long, but you\'ll be a true champ afterwards!',
    },
  ],
};
