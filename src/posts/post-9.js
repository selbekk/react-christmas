import marked from 'marked';
export default {
  title: 'Introducing CSS-in-JS',
  lead: `
React did something pretty radical when introducing JSX - suddenly we were blending our logic and structure in the same
file. Now, the time has come to include CSS as well!
  `,
  body: marked(`
The concept of separation of concerns have always been important in computer science. By following this principle,
you'd have a modular application that encapsulated internal data structures and created minimal interfaces to integrate
with. I'm still a huge fan of this pattern, and I try to follow it as often as I can.

When I started out as a programmer, I kept to this pattern by placing HTML in one file, the JS logic in another and
the CSS rules in a third. This way, I thought, I was separating the three different concerns of structure, presentation
and behavior.

When React arrived with its reusable components and JSX sexyness, however, I soon came to realize that this way
of separating my code might not be as clever as it used to be. Turns out, placing the structure and logic operating on
it in the same file made the code both more readable and maintainable - and the APIs and reusablility usually got better
instead of worse. Perhaps... both the HTML and JS was parts of the same concern - namely creating a component?

## The last piece of the puzzle

Colocating the presentational part of this concern with the rest of the code kind of just made sense to me. Sure, there
was a few WTFs the first time I saw somebody writing CSS rules in JavaScript - but that scare went away pretty fast.
Because just as I quickly accepted the upsides of JSX, the immediate benefits of CSS-in-JS was pretty apparent to me:

- You don't need a build step for your CSS
- You have access to the full power of JavaScript to write your styles
- Styles are colocated with the code using it, so you can't forget to delete it when your component's being retired.

In addition to this, I came across [Mark Dalgleish's wonderful talk at this year's CSSconf
EU](https://www.youtube.com/watch?v=X_uTCnaRe94), and that opened my eyes to some of the real benefits to this pattern.
To sum it up, his main point is that CSS-in-JS solves some pretty big obstacles that CSS developers face. Both scoping
of styles, critical CSS, optimization and sharing of styles across applications are solved by default, instead of using
elaborate techniques to achieve them.

## So how does it work?

Currently, there are a few different libraries to choose from that all solve the same problem.
[\`glamorous\`](https://github.com/paypal/glamorous) by PayPal lets you specify styles in JavaScript object notation,
which looks like this:

\`\`\`javascript
const colors = {
    darkGray: '#333',
};
const PageHeading = glamorous.h1({
    color: colors.darkGray,
    fontSize: '32px',
    textAlign: 'center',
});
\`\`\`

Note that the \`PageHeading\` variable is now a regular component, which you can use wherever you want in your code.
Another thing to notice is that you can use regular JavaScript variables to specify stuff like spacing and colors.
Pretty cool, eh?

Another competitor for the CSS-in-JS crown is [\`styled-components\`](https://www.styled-components.com/) by Max
Stoiber. This library uses something called tagged template literals to specify CSS:

\`\`\`javascript
const Button = styled.button\`
    background: colors.green,
    color: colors.white,
    padding: 1em 2em;
\`;
\`\`\`

Both of these libraries (along with many others) offer tons of functionality out of the box, including nesting of
styles, adaption based on passed props (\`<Button big />\` could render a larger button, for instance) and reuse of
styles from similar components.

Summarized, you get a ton of cool stuff out of the box!

## Is it right for your project?

Chances are, yes it is. Even if you can't (or won't) rewrite all of your existing styles to this format, you can start
to use this technique for any new components you're creating. Since this creates real CSS (not inline-styles), it
integrates greatly with existing style sheets. If you run into issues like specificity wars, you can use the
[\`aphrodite\`](https://github.com/Khan/aphrodite) library from Khan Academy to make your CSS-in-JS components "win".
There are tons of reasons to give this technique a try!
`),
  resources: [
    {
      title: 'A unified styling language',
      link: 'https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660',
      body: 'Mark Dalgleish\'s great talk in blog form. Incredibly well written, and very inspiring!'
    },
    {
      title: 'The future of component based styling',
      link: 'https://medium.freecodecamp.org/css-in-javascript-the-future-of-component-based-styling-70b161a79a32',
      body: 'A great read on how you can use the power of JavaScript to achieve vertical rhythm in your designs'
    },
    {
      title: 'Styling React',
      link: 'https://survivejs.com/react/advanced-techniques/styling-react/',
      body: 'SurviveJS has a great write up on how to style React, from regular classes to CSS-in-JS'
    },
  ],
};
