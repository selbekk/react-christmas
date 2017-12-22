import marked from 'marked';
export default {
  title: 'Boost your performance!',
  lead: `
You can write some pretty fast and amazing apps with React without thinking twice about
performance optimizations. However, there are some pretty cool tricks you can do whenever
your app starts to slow down.
  `,
  body: marked(`
React is fast. I mean, real fast. It re-renders your entire app in a matter of milliseconds
(if even that) whenever you make a change to the state or data feeding into it.

The way React does this is by minimizing the amount of operations it asks the browser to do.
It keeps a virtual representation of the DOM (called a virtual DOM), and they only
ask the browser to update what you see when there is an actual difference in the two.
This latter process is called "reconciliation", and there's a ton of cool computer science
stuff behind how it's made.

Whenever a change occurs in a component, React starts the process of re-rendering this
component and all its descendants. It calls the \`render()\` method  (and any life cycle
methods) of each child all the way down - and passes that resulting virtual DOM tree to
the reconciliation process. If there are any differences to the existing virtual DOM,
a minimal set of updates are sent to the browser's DOM.

## So what can go wrong?

Typically, this process of re-rendering and reconciliation goes by lightning fast. It's
only in extreme rare cases you notice that things aren't going by as fast as it should.

One of those times can be when you are re-rendering a page with tons of components in it.
Perhaps a long table or a complex list? That's going to trigger a ton of \`render()\` calls
on a lot of components - and the update process might take a bit longer than those few
milliseconds mentioned above. Luckily, React gives us a few tools to optimize those cases.

## Skip the wait with \`shouldComponentUpdate\`!

[A few days ago](/16) we learned about class-based components and how they supply us with
some pretty powerful functions called "lifecycle methods". One of the most powerful is
actually one you see used the least - \`shouldComponentUpdate\`.

This lifecycle method returns a boolean deciding whether this component should re-render
(or update) based on its current and upcoming set of state and props. If this method
returns false, no re-render will take place, and that part of your app will remain the same,
at least until the next update.

This "short-circuting" of the rendering process can actually make a pretty large difference
under the right circumstances. If you have a list of hundreds of items that never change,
assuming they might change everytime an unrelated prop updates might be a huge waste of time.
Since JavaScript is a single-threaded language, this waste of time might translate to what the
users call "yank" or "a slow app". And we hate those words!

## So how does it work?

By default, React assumes that all components should update at all times. If that doesn't fit
your usecase, you can implement your own version like this:

\`\`\`javascript
class ListItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.text !== nextProps.text;
  }
  render() {
    return <li>{this.props.text}</li>;
  }
}
\`\`\`

In this case, the \`render()\` method will only be called if the \`text\` prop changed. If not,
that's where the update-process stops for this component. That might not mean a lot for this
contrived example, but if you have thousands of list items, and each list item has some
children, you might have a performance issue.

## \`PureComponent\` bliss

If implementing these checks all over is starting to clutter your code, you're probably using them
too much. But if not, there's actually a shortcut built in to React. Instead of extending
\`React.Component\`, you can extend \`React.PureComponent\`! **BOOM**! This class already has a
simple implementation of \`shouldComponentUpdate()\` that looks like this:

\`\`\`javascript
class PureComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowCompare(this.props, nextProps) || !shallowCompare(this.state, nextState);
    }
}
\`\`\`

That's it! \`PureComponent\` does a shallow comparison of props and state, and if it's different,
the component should update. If they are the same - the component should not update. This actually
turns out to be enough for most cases, and it lets you focus on writing features, not performance
optimalizations. Note that this is only a shallow comparison - if you have deeply nested
prop or state structures, you might receive some false positives.

## So... \`PureComponent\` all the things?

Nope! Turns out, React defaults to updating all components for a reason. First off, skipping
re-renders might lead to hard-to-reproduce bugs that are going to drive you insane at some point.
Second - doing all these \`shouldComponentUpdate\` checks all over the place takes some time as
well - and if you use this check on components that usually updates, you'll waste time checking
for something that's going to be \`true\` most of the time anyhow.

To summarize, \`shouldComponentUpdate\` and \`PureComponent\` are powerful tools - but only use
them if you actually have performance issues.

I've found some really cool articles for you to read (or save for another day) below. Have a look!
`),
  resources: [
    {
      title: 'Optimizing Performance',
      link: 'https://reactjs.org/docs/optimizing-performance.html',
      body: 'React\'s own guide to optimizing performance, including a nice guide to shouldComponentUpdate',
    },
    {
      title: '3 new tools to speed up your app',
      link: 'https://medium.freecodecamp.org/make-react-fast-again-tools-and-techniques-for-speeding-up-your-react-app-7ad39d3c1b82',
      body: 'Some cool tricks to figure out what slows down your app, and why!',
    },
    {
      title: 'Debugging React performance',
      link: 'https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad',
      body: 'Amazing walk-through of how to do a performance audit on your app',
    },
  ],
};
