import marked from 'marked';

export default {
    title: 'Testing your code',
    lead: `
        Avoiding bugs in your code is important for the end user experience. Choosing the right way to test your code
        is paramount!
    `,
    body: marked(`
Unit testing your code is important to avoid introducing bugs whenever you are writing new code or refactoring legacy.
When you do it right, you can feel comfortable that edge cases are covered and mission critical components work as they
were intended.

Although there are many test frameworks to choose from, [\`jest\`]() have risen up as a very attractive candidate.
Unlike most test frameworks, there is no setup required, and you can get straight to writing your unit tests.

## Setup? Done.

As mentioned in [yesterday's article](/1), Jest is included with \`create-react-app\`. If you have an existing
application, however, setting up Jest is easy as peas. Add the following to your \`package.json\`:

\`\`\`javascript
"scripts": {
    "test": "jest",                     // Run your test suite
    "test:watch": "jest --watch",       // Start an iterative test watcher
    "test:coverage", "jest --coverage"  // Run tests, outputing a test coverage overview
}
\`\`\`

## Snapshots

A huge feature that puts Jest apart from the rest is something called snapshot testing.

## Learn more about Jest!

There are tons of resources about Jest online. Here's my favorites:

- [Documentation]()
- [A nice getting started guide]()
- [Some really cool advanced features]()
`),
};
