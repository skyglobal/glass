# Contributing

Like most open source projects, we ask that you fork the project and issue a [pull request](#pull-requests) with your changes.

We encourage small change pull requests, the smaller the change the quicker and easier it is merged.

## Dependencies

To build the component locally, you'll need to install these globally :
 * [node.js](http://nodejs.org)
 * [Bower](http://bower.io)

## Workflow

1. Fork the project
2. Clone your fork
`git clone {{ git.SSH-URL }}`
3. Setup your 'upstream'
`git remote add upstream {{ git.HTTPS-URL }}`
4. Create a topic branch to contain your change
`git checkout -b feature-my-feature`
5. Make sure [CHANGELOG.md](./CHANGELOG.md) includes a summary of your changes in a new version number heading
6. Make sure you are still up to date with master
`git pull upstream master`
7. If necessary, rebase your commits into logical chunks, without errors.
8. Push the branch up
`git push origin my-awesome-feature`
9. Create a pull request and describe what your change does and the why you think it should be merged.

## Running Locally

 * `npm start` :  Run server on port 3456
 * `npm test` : Run the tests once and produce a code coverage report

## Working with dependencies

If you want to make changes to the bower dependencies:

 * `cd some-bower-dependency/`
 * `bower link`
 * `cd glass/`
 * `bower link some-bower-dependency`
