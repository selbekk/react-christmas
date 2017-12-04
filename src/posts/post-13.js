import marked from 'marked';
export default {
  title: 'An intro to routing in React',
  lead: `
Routing is usually one of the hardest parts of any web application. In React, however, they're not really anything
different than regular components!
  `,
  body: marked(`
React is great for implementing small widgets and parts of any existing web application, but this framework really
shows its strength when you build an entire application with it. But in order to do that, you probably need a few
different routes.

Although there are many frameworks for implementing routing in React ([or to create your
own](https://medium.freecodecamp.org/you-might-not-need-react-router-38673620f3d)), most people end up using the amazing
[React Router](https://github.com/ReactTraining/react-router) from Formidable. They have a declarative approach to
defining routes, which means that everything is pretty much regular components.

## So let's get started!

The first thing you need to do is to mount a \`<BrowserRouter />\` component. This component wraps your entire
application, and uses the HTML5 History API to keep the URL and your application's UI in sync.

\`\`\`javascript
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
\`\`\`

The \`BrowserRouter\` component accepts a \`basename\` property which lets you set the... base path for your
application. If you're writing an app that runs at some sub-path of a website (like /path/to/your/app), you can specify
this here, and you won't need to re-write that part of the URL in every link throughout the app.

## Specify your routes!

Since \`react-router\`'s routes are regular components, you can render them wherever you want. As long as you keep them
inside the \`<BrowserRouter />\` component, any \`<Route />\` will render whenever they matches the current route.

However, you typically want some top level routes to handle your application flow. This is the typical setup I use in
my own applications:

\`\`\`javascript
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <SiteHeader />
    <main>
      <Route path="/" exact component={FrontPage} />
      <Route path="/about" component={AboutPage} />
    </main>
    <SiteFooter />
  </div>
);
\`\`\`

Each \`<Route />\` component requires a \`path\` property (which specifies a route to match), an \`exact\` flag to
specify whether you want the route to match any path that matches or only the exact string, and a \`component\` prop
that specifies what to render whenever the route matches. Easy as pie right?

## Some bonus components

I'm not going to write an entire tutorial on \`react-router\` - there are way too many good ones out there (check the
resources below!), but here's a few components that's good to know:

### \`<Link />\`

This component is used to link internally in your app. It works just like an \`<a />\` tag, but instead of \`href\` you
write \`to\`:

\`\`\`javascript
<Link to="/about">About me</Link>
\`\`\`

### \`<Redirect />\`

If you want to redirect your user (like if you click on a link that is not yet available, like tomorrow's article), you
can render a \`<Redirect />\` component instead of your regular component.

\`\`\`javascript
const Article = (props) => {
  if (!props.isAvailable) {
    return <Redirect to="/" />;
  }
  return (
    <Article title={props.title} body={props.body} />
  );
};
\`\`\`

### \`withRouter\`

When you render a route, the component usually gets three props provided - \`history\`, \`match\` and \`location\`.
These are useful when you need to fetch stuff from a parameterized URL, manipulate history or just fetch the current
location parameters.

If you need these somewhere further down your render tree, however, you might want a shortcut instead of passing these
down from the top level component.

\`withRouter\` is a higher order component that provides these three props to whatever component that needs them:

\`\`\`javascript
import { withRouter } from 'react-router-dom'
const SomeComponent = props => (
  <div>
    <p>
      The current URL is {props.location.pathname}.
    </p>
    <button onClick={() => props.history.goBack()}>
      Go back to the last page
    </button>
  </div>
);

const SomeComponentWithRouterProps = withRouter(SomeComponent);
\`\`\`

## Learn once, write anywhere!

One of the main selling points of React is that you can use the same techniques to write code wherever - on the web,
on the server or even in native mobile apps. This is why you see me importing \`react-router-dom\` everywhere - there
is a matching library for React Native, and you can use the \`<StaticRouter />\` component instead of
\`<BrowserRouter />\` whenever you need to render your app on the server.

Hope you learned something, and that you'll use this on your next project!
`),
  resources: [
    {
      title: 'React Router Docs',
      link: 'https://reacttraining.com/react-router/web/',
      body: 'React Router has great docs that helps you get started, and has recipes for many common pitfalls'
    },
    {
      title: 'React Router - The complete guide',
      link: 'https://www.sitepoint.com/react-router-v4-complete-guide/',
      body: 'If you\'re looking to dive into the details of React Router, this is the article for you'
    },
    {
      title: 'All about React Router 4',
      link: 'https://css-tricks.com/react-router-4/',
      body: 'A fun article about the origins of the new declarative API of React Router 4. A must read!',
    },
  ],
};
