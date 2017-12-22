import marked from 'marked';

export default {
    title: 'Structuring your application',
    lead: `
Structuring your React app is incredibly important for making your project maintainable and easy to navigate. What is
the best way to do it?
    `,
    body: marked(`
Whenever I start out a new app, I tend to ask myself the question, "How should I structure my files?"

Truth is, this is a hard question to answer. There is no single right way to make sure the next developer understands
where each file should be, and there are tons of alternatives. However, I have a way that has worked for me, and there
are several other ones that work just as well. This article is going to outline a few of them.

## My way

I tend to split my app into two main topics - components and containers. Containers are basically one-off layout views
for a particular route, while components tend to be (mostly) reusable pieces of code. In addition, I separate out state
logic (like Redux's dispatchers, actions and reducers) and reusable logical containers. The last piece in the puzzle is
utilities.

Whenever I bootstrap a new application, I use \`mkdir -p\` to create the following application structure:

\`\`\`bash
src
  actions
  components
  containers
  dispatchers
  reducers
  utils
\`\`\`

### Components

I tend to create a folder for each component. I add an \`index.js\` file in each of these to simplify importing each
component. Inside this folder, I add potential styles, tests, and the component itself. If a component is a bit large
and needs to be split into several distinct (but not reusable) components, each of these are also placed in here.
Here's an example of how I'd structure a component:

\`\`\`bash
some-component
  index.js
  SomeComponent.css
  SomeComponent.js
  SomeComponent.spec.js
  SomeComponentSubPart.js
  README.md
\`\`\`

Depending on the component, and the application itself, I consider adding a \`README.md\` file, as well, explaining the
usage and use cases for that particular component. Naming can often only get you so far - sometimes the use case (and
limitations) needs some explaining.

The same rules go for containers, really.

### Redux folders

Actions, dispatchers and reducers always get their own folders in my projects, each with their own \`index.js\` file.
For actions and dispatchers, the \`index.js\` file works as an export aggregator, so that I can
\`import * as actions from '../actions';\` instead of remembering which file my particular action (or dispatcher) is
from. This practice also pushes me to create unique action (or dispatcher) names for each one - simplifying
understanding the code later on.

The reducers folder follows the same structure, only with a slightly more complex \`index.js\` file. This time, I
export the result of \`redux\`'s \`combineReducers\` function - so that I can create my store with a simple import.

## The highway

My way isn't necessarily the only one that'll work for you. Perhaps your projects require a different approach
altogether. That's totally fine! Luckily, there are several other approaches that lets you get away with
significantly less folders, files and navigation.

For simple applications, a "no structure" approach is totally fine. This web app is structured like that, for instance
([go check out the source code!](https://github.com/selbekk/react-christmas)). Simply put all your components in the
same root folder, and whenever the application reaches a certain size (this one never did), you can consider adding more
structure as you go.

## Where to put the tests?

There are people that love co-locating tests with the components / logic they test, and there are people that will never
see a piece of test code outside a dedicated \`test/\` folder. Both approaches are fine, and come with their own
benefits. To be honest, it's mostly up to taste - so I'm not going to push you either way.
    `),
    resources: [
        {
            title: 'Component folder structure',
            link: 'https://medium.com/styled-components/component-folder-pattern-ee42df37ec68',
            body: 'The component folder pattern can be a great approach for keeping everything related to your component inside a single folder',
        },
        {
            title: 'The 100 % correct way',
            link: 'https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed',
            body: '...or why there\'s no such thing. Great article exploring several different patterns',
        },
        {
            title: 'A slightly different approach',
            link: 'https://daveceddia.com/react-project-structure/',
            body: 'Another great article on structuring your application',
        },
    ],
}
