import marked from 'marked';
export default {
  title: 'Write quality code',
  lead: `
    Writing great, readable, accessible and well-formatted code used to take years to learn. Now there are tools to help
    you get there faster!
  `,
  body: marked(`
Whenever I join a new project or team, there's always a lot of hassle to get used to the code style, formatting and
general way of doing things. Even with my best foot put forward, most feedback on my first couple of pull requests
typically sound like "use single quotes", "tabs not spaces" and "we like to put the braces on the next line".

Although I do appreciate my new comrades' effort in analyzing my code, I can't help but think that there might be some
actual bugs in my code that's missed due to these easy-to-catch gotchas. Luckily, this is a thing of the past.

## Meet prettier!

Prettier is the brain-child of Christopher Chedeau ([@vjeux on twitter](https://twitter.com/vjeux)), and is one of the
tools that currently help me not care about code formatting. It is a simple CLI tool that integrates with your favorite
IDEs, and parses, analyzes and re-formats your code whenever you want. On commit? On save? That's all up to you.

Although it's opinionated, Prettier comes with a few common options for teams and organizations to quarrel over. At the
time of writing, these include:

- print width (how long your lines are)
- tab vs spaces, and tab width (2 spaces? 4?)
- add or avoid semicolons at the end of an expression
- single or double quotes for strings
- a few spacing options
- include or exclude trailing commas in arrays and objects

[There are a few more](https://prettier.io/docs/en/options.html), but only a few.

The rest is, as the 14 year old stereotypical OC-kids say, 'care.'

## ESLint for the rest!

There are, of course, more we can do to avoid common pitfalls in our code and pull requests. One of my favorite tools
out there right now to do just that is ESLint.

ESLint analyzes your code, and runs a set of "linting rules" against it. There are literally thousands of them though,
so you might want to consider using a preset.

AirBnB has created what most people use today, namely
[\`eslint-config-airbnb\`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). This adds
common rules for both JavaScript in general, React in particular, and also accessibility concerns. No more forgetting
to use a button whenever you want to have some kind of user interaction with an object!

AirBnB's preset comes with tons of formatting rules as well, though. These are great for the most part, but if you'd
like to use Prettier to handle all of your formatting for you, you need a way to disable them. Luckily there is a preset
for that as well, namely [\`eslint-config-prettier\`](https://github.com/prettier/eslint-config-prettier). Add this to
your \`.eslintrc\` config file, and you're good to go!

## That was pretty easy, right?

Look ma! No bugs! Or well, fewer bugs. And better accessibility, faster code reviews and in general much happier
developers.

`),
  resources: [
    {
      title: 'Prettier docs',
      link: 'https://prettier.io/docs/en/index.html',
      body: 'The few usage guidelines you need to know when using Prettier. Great examples of integrating with IDEs too'
    },
    {
      title: 'Getting started with ESLint',
      link: 'https://eslint.org/docs/user-guide/getting-started',
      body: 'A simple getting started guide for ESLint, including a 7 minute video tutorial',
    },
    {
      title: 'Breating air with AirBnB\' config',
      link: 'https://medium.freecodecamp.org/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a',
      body: 'A great introduction to the ins and outs of eslint-config-airbnb',
    },
  ],
};
