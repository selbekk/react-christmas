import marked from 'marked';
export default {
  title: 'Split your app into pieces!',
  lead: `
With the rise of single page applications, we also got megabyte-sized bundles of JavaScript code to download and
compile before we could show anything to the user. THIS ENDS NOW!
  `,
  body: marked(`
Huge bundle sizes can pretty easily ruin your user experience - especially on mobile devices. The reason usually is
because you're downloading the entire application at once - even if you're only showing a small subset of your
application at a time.

A new JavaScript feature that's currently at stage 3 in the TC39 standardization process is something called [dynamic
imports](https://github.com/tc39/proposal-dynamic-import). This nifty little function let's us load parts of our
applications dynamically, instead of bundling everything up in one large JS file.

Webpack 2 and beyond actually has built-in support for something called code-splitting - which basically means it splits
your code wherever you use one of these dynamic imports. And this - my friend - provides us with all the tools we need
to minimize the initial footprint of our application.

## Meet react-loadable

One of the people behind Babel is [James Kyle](https://twitter.com/thejameskyle), and he is one of those guys that
just keeps on producing incredible stuff for the open source community without thinking twice about it. One of those
things are something called [\`react-loadable\`](https://github.com/thejameskyle/react-loadable).

\`react-loadable\` is a higher order component loads the component you want, and renders it for you when it's done. If
you want, you can give it a spinner component to show while loading, and even error handling and fallback strategies.
It's one of those libraries you'll start using all of the time once you've tried it. [Have a look at the
docs](https://github.com/thejameskyle/react-loadable) if this seems like something you want to try!

## Splitting out routes

If you have an application that uses a router, and some routes only are used for a subset of users, you might want to
consider splitting out some routes into their own bundles - called chunks. These chunks are fetched whenever the user
is navigating to a particular route, and they only contain what code is not already loaded. In other words - you don't
need to re-download React every time you download a route that uses some React-code!

Making this happen with \`react-loadable\` is pretty simple:

\`\`\`javascript
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Spinner from './components/Spinner';

const LoadableAdminPage = Loadable({
  loader: () => import('./AdminPage'),
  loading: Spinner,
});

const App = () => (
  <BrowserRouter>
    <div>
      {/* other routes */}
      <Route path="/admin" component={LoadableAdminPage} />
    </div>
  </BrowserRouter>
);
\`\`\`

There's a lot of boilerplate above, but the important part is that we create this new component called
\`LoadableAdminPage\` that we send to our Route. Whenever the user accesses the \`/admin\` route, the route is loaded
and then displayed. Easy as peas!

## Splitting out components

Splitting out routes is fine for many use cases, but often you want to be even more specific. We actually had this
use case for one of the apps that I work with on a daily basis. For some users, we needed to show a huge searchable
dropdown list with ~10000 items. To make this work somewhat smooth, we needed to use \`react-virtualized\`, which is a
great library for dealing with huge lists. Unfortunately it's pretty big - so we would hate to have to load it for
all our users.

Instead, \`react-loadable\` helped us out yet again.

\`\`\`javascript
const LoadableDropdown = Loadable({
  loader: () => import('./components/SearchableDropdown'),
  loading: Spinner,
});

const PurchaseFlow = (props) => (
  <div>
    {props.showDropdown &&
      <LoadableDropdown />
    }
  </div>
);
\`\`\`

Now, the huge component and its dependencies only got loaded whenever it was needed - saving the user almost a second
of download and parse time whenever it wasn't needed.

## Name your chunks

One thing you'll notice quickly when you start using code splitting, is that you'll get totally non-sensical chunk
names. Luckily, webpack lets us name them!

What you need to do is to write a comment like this inside your import statement:

\`\`\`javascript
const LoadMyComponent = () => import(
  /* webpackChunkName: "my-component-chunk" */
  './MyComponent'
);
\`\`\`

Even though it looks pretty ugly, it helps you with debugging down the line. :)
`),
  resources: [
    {
      title: 'Introducing React Loadable',
      link: 'http://thejameskyle.com/react-loadable.html',
      body: 'An article outlining the new React Loadable project, and how to use it'
    },
    {
      title: 'Code splitting in create-react-app',
      link: 'https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html',
      body: 'An in-depth article explaining how to do code splitting without any helper libraries. Insightful!'
    },
    {
      title: 'Webpack\'s docs on code splitting',
      link: 'https://webpack.js.org/guides/code-splitting/',
      body: 'Some in-depth docs on how to tweak code splitting in Webpack. Not always needed, but nice to know!',
    },
  ],
};
