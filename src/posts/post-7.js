import marked from 'marked';
export default {
  title: 'Share logic between components!',
  lead: `
    Sharing code between components can be made much more declarative and reusable than utility functions
  `,
  body: marked(`
Sharing structure across an application is pretty simple in React. Sharing complex logic across components, however,
that's a challenge that's not as easy to understand how to solve.

Input validation, internationalization and accessibility concerns are all things that are so-called cross cutting
concerns. They introduce very similar-looking logic across your application, and adds tons of technical debt if you
have to copy paste in the same rules everywhere.

Now, wouldn't it be cool to have a way to share those concerns in a declarative React way?

## Higher order components

One way of doing just that is by means of something the community called higher order components (or HOCs for short).
Simply put, an HOC is a function that accepts a component as an argument, and returns a new component that wraps that
component. Instead of trying to describe it, I'll show you with a quick example, with an HOC that adds some debug
logging:

\`\`\`javascript
const withLogging = (TargetComponent) => class extends Component {
  componentDidMount() {
    console.log(\`\${TargetComponent.displayName} mounted\`);
  }
  componentWillUnmount() {
    console.log(\`\${TargetComponent.displayName} unmounted\`);
  }
  render() {
    return <TargetComponent {...this.props} />
  }
}
\`\`\`

To add this to your component, you can call it like this:

\`\`\`javascript
const MyComponent = () => <h1>Hello</h1>;
const MyComponentWithLogging = withLogging(MyComponent);
\`\`\`

This works great for sharing logic or behavior between your components! If you've ever used context, for example, this
is a great way to expose it through props instead of using the somewhat complex context API. Long story short - HOCs
are great!

## Render props

HOCs are terrible. No, not really, but they do have one downfall - they're not components themselves! Instead, they are
functions that wrap your components in a new component, and you need to call them at some point.

A different approach that keeps things looking all nice and declarative is a technique that is known as render props.
Basically it puts the entire responsibility of rendering your component and applying the provided props to the consumer.
More responsibility might sound a bit tedious, but the power this technique provides is just amazing.

Again, here is an example of an input group component that prints errors and provides some extra props for the input
field:

\`\`\`javascript
class InputGroup extends React.Component {
  id = uuid.v4(); // creates a unique ID
  render() {
    const inputProps = {
      'aria-invalid': !!this.props.error,
      id,
    ;
    return (
      <div>
        <label for={this.id}>{this.props.label}</label>
        {this.props.render(inputProps)}
        {error && <span>{error}</span>}
      </div>
    );
  }
}
\`\`\`

Notice that we call the prop called \`render\` to produce the input field itself - so let's do just that:

\`\`\`javascript
const SomeForm = props => (
  <form>
    <InputGroup
      label="Name"
      error={props.errors.name}
      render={inputProps => <input name="name" {...inputProps} />}
    />
  </form>
);
\`\`\`

As you can tell, we basically send in a function that renders an \`<input />\` field - it pretty much looks like we're
sending in a component! Truth is, that's exactly what we're doing - we're creating a new component that accepts props
provided by the \`<InputGroup />\` component.

Although this is a pretty simple example, I hope it serves as good inspiration to what you can do with it. You can
replace your current HOCs with actual React components, and you leave the rendering to the consumer!

### Function-as-children

A variation of the render props pattern is called the function-as-children pattern. It's basically the exact same,
except that you change the name of your prop from \`render\` to \`children\`. And since \`children\` is handled
in a special way in JSX (note - not React, to React it's just another prop), you can write the example above like this:

\`\`\`javascript
const SomeForm = props => (
  <form>
    <InputGroup
      label="Name"
      error={props.errors.name}
    >
      {inputProps => <input name="name" {...inputProps} />}
    </InputGroup>
  </form>
);
\`\`\`

Some people like that, other people don't. Truth is, it doesn't matter much - do whatever you and your team feels
comfortable with!
`),
  resources: [
    {
      title: 'My talk on HOCs',
      link: 'https://vimeo.com/208182708',
      body: 'I held a talk discussing the uses of HOCs at the BEKK Open conference. Beware - it\'s in Norwegian'
    },
    {
      title: 'Advanced HOCs tips',
      link: 'https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e',
      body: 'A great article about different techniques, tips and tricks when it comes to higher order components'
    },
    {
      title: 'Use a render prop!',
      link: 'https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce',
      body: 'Kent C. Dodds writes a convincing argument for render props. Definitely a must read!'
    },
  ],
};
