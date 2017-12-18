import marked from 'marked';
export default {
  title: 'Some cool React tips and trick',
  lead: `
After spending some time with React, I've learned a few nice tips and tricks to make your app as
composable, declarative and maintainable as possible.
  `,
  body: marked(`
## Refs - and when not to use them

First out is refs. Refs are references to either a React component or a DOM node. They are useful when you want to
call imperative functions, like focusing an input field or triggering some other imperative DOM API. They are also a
nice escape hatch whenever you want to reach into a component for some reason.

Here's how it could look:

\`\`\`javascript
class SearchField extends React.Component {
  componentDidMount() {
    this._inputRef.focus();
  }
  render() {
    return (
      <input
        type="search"
        ref={(ref) => this._inputRef = ref}
      />
    );
  }
}
\`\`\`

There are a few gotchas with refs though. First off, as I mentioned above, they're an escape hatch. Whenever you can't
do something declaratively, the refs are there to rescue you. However, there aren't a lot of stuff you can't make
declarative if you really try - which again gives you a nicer API that's easier to understand, maintain and test.

If you need to get the state from a component, either extract that state to the parent component, or send in a callback
that will be called at the correct point in time.

If you want to control the rendering, you might want to look into the [render-props pattern](/7).

If you can't find any way to not use a ref - try a little harder. Chances are, there is a way to make your API
declarative.

## Rendering conditionally

Sometimes you want to render different components depending on some state. JSX does not render false or undefined, so
you can use conditional short circuting to render a given part of your component only if a certain condition is true:

\`\`\`javascript
const SomeComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address &&
      <p>{address}</p>
    }
  </div>
);
\`\`\`

If you're in an if-else situation, you can even use a ternary! Watch out though - these can get pretty ugly if you're
not switching between pretty simple component structures:

\`\`\`javascript
const SomeComponent = ({ data }) => (
  <div>
    {data
        ? <ShowData {...data} />
        : <Spinner />
    }
  </div>
);
\`\`\`

Finally - don't be afraid to return early from your \`render\` function. It'll save you tons of deeply nested \`&&\`s
further down.

\`\`\`javascript
const SomeComponent = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div>
      <h2>Data</h2>
      <ShowData {...data} />
    </div>
  );
};
\`\`\`

## Inline functions - and why they aren't a big deal

First, let's show you what an inline function is:

\`\`\`javascript
const SomeComponent = props => (
  <button onClick={() => alert('I was clicked!')}>
    Click me
  </button>
);
\`\`\`

The callback inside the \`<button />\`'s \`onClick\` handler is an inline function. Every time you render this
component, this function is re-created, which sounds inherently bad.

In reality though, it's not a big deal. Ryan Florence, which co-authored React Router, wrote [this inspiring blog
post](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578) explaining in laymans terms
how ridiculous this fretting about inline functions are. I highly recommend you read that article - he explains it
much better than I ever could.

## Use DOM props when you can!

I've seen component libraries that specify tons of props for pretty simple components like buttons and links, and then
re-apply them later on. Often, they're given slightly different names to improve the API. Here's one such example:

\`\`\`javascript
const MyButton = (props) => {
  const {
    invalid,
    disabled,
    loading,
    value,
  } = props;
  return (
    <button
      aria-invalid={invalid}
      className={\`button \${loading ? 'button--loading' : ''}\`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
\`\`\`

Now you have to remember two APIs - one for the DOM and one for your particular component. This is a huge cognitive
load (at least for me), so I tend to submit a breaking pull request making them look like this:

\`\`\`javascript
const MyButton = (props) => {
  const {
    loading,
    ...rest
  } = props;
  return (
    <button
      className={\`button \${loading ? 'button--loading' : ''}\`}
      {...rest}
    />
  );
};
\`\`\`

This has three main advantages over the former. First off, it maintains the original API. Second, you can send in the
value as \`children\`, so it'll look that much more declarative. Thirdly, I don't have to add new props all the time,
as any unknown props are simply spread directly on the DOM element.

That last part might sound scary to some of you - because that means you'll be able to send in props that aren't DOM
compatible, and that'll result in a warning from React. My experience is that this is an error you'll notice quickly
while developing, and that it rarely (if ever) gets into production code.

## Learn the dev tools!

Finally, here's a trick that dwarfs all other tricks. If you didn't know already, React has its own developer tools,
that lets you inspect your components, their state and their props. Another great little hack is that you can toggle
a feature that highlights any components that update - a great way to see if you're re-rendering when you shouldn't
(and therefore can improve performance). You can get them for both
[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

  `),
  resources: [
    {
      title: 'React Bits',
      link: 'https://vasanthk.gitbooks.io/react-bits/',
      body: 'A GitBook all about tips, tricks, best practices, anti-patterns and more. A great resource!',
    },
    {
      title: 'Refs and the DOM',
      link: 'https://reactjs.org/docs/refs-and-the-dom.html',
      body: 'A great introduction to refs and how (not) to use them',
    },
    {
      title: 'An introduction to React Dev Tools',
      link: 'https://egghead.io/lessons/developer-tools',
      body: 'A free lesson from Egghead on how to use the React Dev Tools to improve your developer experience',
    },
  ],
};
