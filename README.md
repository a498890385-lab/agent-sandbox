# agent-sandbox

A deliberately small repository used to try out
[dsh-superagent](https://github.com/deepseek-ai/dsh-superagent-prototype):
an agent watches this repository, turns an `@mention` on an issue into a ticket,
works in its own checkout and opens a pull request.

## What is here

- `src/slugify.js` turns a title into a URL-safe slug.
- `src/truncate.js` cuts text down to a maximum length, e.g. `truncate('Hello World', 8)` returns `Hello W…`.
- `test/slugify.test.js` and `test/truncate.test.js` cover both helpers with Node's built-in test runner.

## Run

    npm test                              # node --test, no install needed
    node src/slugify.js "Hello World"     # hello-world
    node src/truncate.js "Hello World" 8      # Hello W…

## Trying the agent

Comment on an issue: `@<agent login> <request>`. Keep the request small, for example:

> Add a `truncate(text, max)` helper next to `slugify` with tests, and mention it in the README.

## Rules

See [AGENTS.md](AGENTS.md).
