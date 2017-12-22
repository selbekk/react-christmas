import marked from 'marked';
export default {
  title: 'Add error boundaries to your app!',
  lead: `
    React 16 brought us a way to handle errors in a neat, declarative way
  `,
  body: marked(`
A thing that has bothered me with React (or most declarative frameworks, really) is that dealing with errors is hard.
Typically what happens is that some random error corrupts React's internal state, which in turn creates some very
cryptic error messages on the following renders.

Cry no more. Error boundaries are here!

An error boundary is a component that catches and handles errors that occurs in its children component trees. It does
**not** handle errors within itself - only its children. However, this leads the developer to wrap error-prone code in
reusable error boundary components.

Errors are caught with the \`componentDidCatch\` lifecycle method, so what you typically want to do is to set your
error boundary component's internal state to symbolize that the children has thrown an error.

Here's a pretty bare bones example, that basically just needs some styling to be a drop-in in your app:

\`\`\`javascript
class ErrorBoundary extends Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <div>Can't display this component!</div>
        }
        return this.props.children;
    }
}
\`\`\`

Using this is also pretty easy:

\`\`\`javascript
const App = () => (
    <ErrorBoundary>
        <ChatBox />
    </ErrorBoundary>
);
\`\`\`

Note that you can use this technique wherever you want. You can disable a certain part of the UI in case of trouble,
or you can simply redirect the user to an error page. That's all up to you, because React rocks!
`),
  resources: [
    {
      title: 'Error handling in React 16',
      link: 'https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html',
      body: 'The introductory blog post by the React crew. Simple introduction on how to use this new technique'
    },
    {
      title: '2 minutes of componentDidCatch',
      link: 'https://medium.com/@sgroff04/2-minutes-to-learn-react-16s-componentdidcatch-lifecycle-method-d1a69a1f753',
      body: 'Very well written article about this new lifecycle method'
    },
    {
      title: 'Error boundaries',
      link: 'https://blog.sentry.io/2017/09/28/react-16-error-boundaries',
      body: 'More information about error boundaries and how to use them in real-world projects'
    },
  ],
};
