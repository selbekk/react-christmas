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
    // Run your test suite
    "test": "jest",
    // Start an iterative test watcher
    "test:watch": "jest --watch",
    // Run tests, outputing a test coverage overview
    "test:coverage", "jest --coverage"
}
\`\`\`

## Snapshots

A huge feature that puts Jest apart from the rest is something called snapshot testing.
`),
    resources: [
        {
            title: 'Official site for Jest',
            link: 'https://facebook.github.io/jest/',
            body: 'The offical web site of Jest has a ton of great tutorials, docs and videos!',
        },
        {
            title: 'From Mocha to Jest',
            link: 'https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50',
            body: 'A very well written article from Gary Borton @ AirBnB about their migration from Mocha to Jest, and what benefits it brought',
        },
        {
            title: 'Snapshot testing',
            link: 'https://blog.callstack.io/unit-testing-react-native-with-the-new-jest-i-snapshots-come-into-play-68ba19b1b9fe',
            body: 'Using snapshots might give your tests tons of more value, especially if you\'re into react-native. This is a great article series about just that.',
        },
    ],
};
