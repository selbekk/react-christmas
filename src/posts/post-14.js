import marked from 'marked';
export default {
  title: 'Check out type checking!',
  lead: `
JavaScript is a dynamically typed language. That means you don't have types to help you secure your apps from stupid
bugs. Here's a few ways to avoid just that in your React apps!
  `,
  body: marked(`
When your React application grows and gets used by real users for any period of time, you're going to stumble into the
occasional bugs. Although I really love JavaScript, it's really easy to forget edge cases like when something is
\`null\` or \`false\` instead of \`undefined\`, or if you forget to pass a property. This article will guide you through
three different ways of trying to mitigate this problem.

## Say hi to prop types!

The simplest way to get your props under control is to use what React comes with by default - prop types. \`propTypes\`
is a static property you add to your components, which outlines your component's public API. You can specify that a
particular prop is of a certain type, and whether or not it's required. This is how it looks:

\`\`\`javascript
import { oneOf, string } from 'prop-types';

const Card = (props) => (
  <div className={\`card card--\${props.type}\`}>
    <h3>{props.title}</h3>
    {props.description &&
      <p>{props.description}</p>
    }
  </div>
);

Card.propTypes = {
  type: oneOf(['regular', 'featured']).isRequired,
  description: string,
  title: string.isRequired,
};
\`\`\`

This example shows three different use cases - an optional string \`description\`, a required string \`title\` and an
enumerated string (or enum for short) \`type\` that's either 'regular' or 'featured'. Note that the prop type types come
in their own npm package (\`prop-types\`) - which makes them easy to destructure like above.

If you fail to adhere to this contract, you'll get warnings in your browser's console - which work great when
developing. You can even use linting to warn you directly inside your editor.

That being said, prop types have some pretty major shortcomings. First of all, they only work for components, which
means any other part of your application (be it state management, server handlers or anything else, basically) is not
secured in any way. This leads you down the road of a lot of unit testing, [which might not be what you
want](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c). In addition, there is
nothing stopping you from deploying this code to production. Perhaps there's a different tool that'll provide you with
more type safety?

## Say hello to Flow

If you're looking to provide your app with even more protection against bugs and errors, you're going to have to abandon
JavaScript as a language. Luckily, you don't have to travel too far.

[Flow](https://flow.org/) is Facebook's own approach to type checking JavaScript code. It lets you add type information
to your React application, without having to add it everywhere at once. Here's a simple example of how that looks:

\`\`\`javascript
// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!
\`\`\`

So what's going on here? The argument \`n\` is annotated with \`number\`, and the function itself is also annotated
with \`number\`. That means that the function accepts a single argument \`n\` of type \`number\`, and that it returns
a new number. Looks pretty simple right?

Of course, the reality of a static type system is that you're going to do a bit more writing when writing your
components. Luckily, with Flow, you can annotate one component at a time, and you can get a lot less bugs with not too
much work. It's not very intrusive, yet it gives you all the compile time safety you've come to expect from back end
languages like Java or C#.

## Make a shift to TypeScript

If you're serious about type safety, Microsoft's open source super set of JavaScript is one of the ways to go. It's a
different language altogether, but it looks and feels pretty much like writing annotations in Flow. One of the major
differences between them, however, is that Typescript comes with its own compiler - so you don't need transpilers such as
Babel.

Just like Flow, you can incrementally port existing code bases over to TypeScript. Simply rename your file with the \`.ts\` extension, and it will be type-checked as soon as you start to add annotations, etc.

Honestly - I don't have a lot of experience with TypeScript (or any, to be honest), but I know a lot of people love it, and I've never met a developer that has tried it and went back. Same goes for Flow, really.
[Here's](https://medium.com/@ckoster22/migrating-from-flow-to-typescript-b065796797db) an article from a guy that made
the shift from Flow to TypeScript - and it looks like it's been a good experience :)

## So what do you choose?

If there's anything a few years of working with React has taught me, it's that type safety and predictable interfaces
are important. You don't, however, have to go all in with a type safe language in order to reap the benefits of type
safety. Consider your use case, the amount of legacy code to port and the importance of avoiding bugs in production.
I tend to stick with simple prop types and a few too many unit tests for my code, a partially type-checked code base
might be a great fit for you!

Please check out the resources for some great articles on type safety!
`),
  resources: [
    {
      title: 'Type checking with prop-types',
      link: 'https://reactjs.org/docs/typechecking-with-proptypes.html',
      body: 'A simple guide to prop types, and why you should use them'
    },
    {
      title: 'Flow with React',
      link: 'https://flow.org/en/docs/react/',
      body: 'The official documentation on how to use Flow with React is really worth a read!'
    },
    {
      title: 'Flow vs TypeScript',
      link: 'http://thejameskyle.com/adopting-flow-and-typescript.html',
      body: 'A pretty sane comparisons between using Flow and TypeScript by a guy that has used both',
    },
  ],
};
