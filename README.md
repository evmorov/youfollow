# YouFollow

View web app [here](https://youfollow.herokuapp.com).

YouFollow provides you information about the people you follow at GitHub. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour to GitHub API, so you need to sign in.

The project is in alpha.

## What's inside

- [React](https://github.com/facebook/react)
- [Create React App](https://github.com/facebookincubator/create-react-app) for avoiding boilerplate
- [Octokat.js](https://github.com/philschatz/octokat.js) for interacting with [GitHub's API](https://developer.github.com/v3/)
- [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap) for making code cleaner
- [Gatekeeper](https://github.com/prose/gatekeeper) for getting a token from GitHub using user's code. GitHub says:

  > GitHub's OAuth implementation supports the standard authorization code grant type. The implicit grant type is not supported.

## What's not here

- [Redux](https://github.com/reactjs/redux)
- [React Router](https://github.com/ReactTraining/react-router)
- Animation
- Tests :cry:

## Deploy

Deployed to Heroku using [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack).

Just type `git push heroku master` and everything will work.

## Limitations

- Currently only the first 30 repositories are shown. Need to add a pagination.

## How to start

1. Clone
2. Register a [GitHub application](https://github.com/settings/developers)
3. Deploy [a server](https://github.com/prose/gatekeeper) for getting a token from GitHub
4. Create `.env` file
5. `yarn install`
6. `yarn start`

## Development

To lint all js and jsx files:

```
yarn run lint
```
