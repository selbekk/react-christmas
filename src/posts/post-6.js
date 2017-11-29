import marked from 'marked';
export default {
  title: 'Fragments, finally!',
  lead: `
    Fragments lets you return several root nodes from your components. Finally we can skip those pesky container divs!
  `,
  body: marked(`
React 16.2.0 is fresh off the presses, and one of the major new features it ships with is something called fragments.
Simply put, a fragment is a "component" that only returns its children, without any new wrapper DOM node.

Here's an example on how it can look:

\`\`\`javascript
import React, { Fragment } from 'react';

const PersonalDetails = props => (
  <Fragment>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
  </Fragment>
);
\`\`\`

This looks pretty similar like you might have done it back in the days, but probably surrounding those \`<p />\`s with
a \`<div />\`-tag. That might not be a problem for this structure, but what about components rendering table rows? Or
list items? A wrapping element would probably not be the way to go then.

This enhancement lets us do a ton of cool things - like rendering definition lists!

## Also a feature in JSX!

Along with this newest 16.2.0 release of React, JSX got support for a short-hand fragment syntax - \`<></>\`. This is
exactly the same as the example over - but now you don't have to import anything!

\`\`\`javascript
import React from 'react';

const PersonalDetails = props => (
  <>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
  </>
);
\`\`\`

Looks cool eh? Go try it out! Although it's really new and untested, it's already supported in most major IDEs,
TypeScript, Babel (although in v7.0.0-beta) and linters like ESLint. There aren't a lot of resources yet, but I'll make
sure to update this article whenever the experience reports and tutorials start showing up.

`),
  resources: [
    {
      title: 'The Fragment blog post',
      link: 'https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html',
      body: 'A great introduction to fragments, and how they can be used'
    },
  ],
};
