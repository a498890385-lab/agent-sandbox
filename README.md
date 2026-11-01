# agent-sandbox

A deliberately small repository used to try out
[dsh-superagent](https://github.com/deepseek-ai/dsh-superagent-prototype):
an agent watches this repository, turns an `@mention` on an issue into a ticket,
works in its own checkout and opens a pull request.

## What is here

- `src/slugify.js` turns a title into a URL-safe slug.
- `test/slugify.test.js` covers it with Node's built-in test runner.

## Run

    npm test                              # node --test, no install needed
    node src/slugify.js "Hello World"     # hello-world

## Trying the agent

Comment on an issue: `@<agent login> <request>`. Keep the request small, for example:

> Add a `truncate(text, max)` helper next to `slugify` with tests, and mention it in the README.

## Rules

See [AGENTS.md](AGENTS.md).
