import marked from 'marked';
export default {
  title: 'The mysteries of setState',
  lead: `
    Although we hear a lot about MobX, Redux and other tools for handling state, React ships with its very own.
  `,
  body: marked(`
Most applications deal with at least some type of state. Visual state, validation state, or even asynchronous state
fetched from some API.

I think I'll go out on a limb and say that state is actually one of the hardest part of application development! And
because it's something we as developers consider complex and hard to do, there's almost as many state management
libraries out there as there are web sites on the internet. Well, I said almost.

Here's another gutsy statement - you probably don't need them.

## Nanananananana \`setState\`!

As you may know, React ships with its own state management tool, namely what we call component state. Simply put, it's
state scoped to your component. React usually gets its data via props, but for data (state) that is local to a
component, it often makes sense to keep that state internal to your component.

You initialize your state as an object, read from it as \`this.state\` and write to it with a instance method called
\`this.setState\`. This method accepts an object with changes to your current state (note - not the entire new state),
and triggers a new render of your component.

## It's asynchronous!

React is actually pretty clever when it comes to saving you render cycles. So instead of just setting the state right
away, it tries to batch as many changes to state as possible into one single update call.

Now this is all jolly good fun and all, but this has one pretty sketchy downside. You can't count on state being set
right away! Here's an example showing a common pitfall:

\`\`\`javascript
class extends React.Component {
  state = { name: 'Dan' };
  someMethod() {
    this.setState({ name: 'Kris' });
    // prints 'Dan'
    console.log(this.state.name);
  }
}
\`\`\`

Luckily, React gives us a way to make sure state has been set before we continue - in the way of a callback:

\`\`\`javascript
  state = { name: 'Dan' };
  someMethod() {
    this.setState({ name: 'Kris' }, () => {
      // prints 'Kris'
      console.log(this.state.name);
    });
  }
}
\`\`\`

If you need to set the next state based on the previous state (like a counter), you can send in a single function,
which receives the previous state and props as arguments. Here's an example of that:

\`\`\`javascript
  state = { count: 0 };
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
}
\`\`\`

## It's for some things, not all the things

So React's internal state is great for a lot of things. For internal UI state like whether some UI panel is open or
stuff like that, internal state is your friend. If you need to share state like this between different components,
you can hoist state to a parent component. But as your application grows, you might get into a situation where all you
do is hoist state, and pass it down several layers of components. In that case, some global state management library
might be just what you need.

We won't discuss this in detail today, but perhaps Santa will bring another blog post one of the coming days.

`),
  resources: [
    {
      title: 'setState docs',
      link: 'https://reactjs.org/docs/react-component.html#setstate',
      body: 'React has some great documentation, especially when it comes to setState'
    },
    {
      title: 'State and lifecycle',
      link: 'https://reactjs.org/docs/state-and-lifecycle.html',
      body: 'A great article explaining how state works, when you should use it and how it works',
    },
    {
      title: 'setState Gate',
      link: 'https://medium.com/javascript-scene/setstate-gate-abc10a9b2d82',
      body: 'Not everybody loves React\'s internal state management. Here is a great rant!',
    },
  ],
};
