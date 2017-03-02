# YouFollow

## About

YouFollow provides you information about the people you follow at GitHub. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour to GitHub API, so you need to sign in.

The project is in alpha.

### What's inside

- [React](https://github.com/facebook/react)
- [Create React App](https://github.com/facebookincubator/create-react-app) for avoiding boilerplate
- [Octokat.js](https://github.com/philschatz/octokat.js) for interacting with [GitHub's API](https://developer.github.com/v3/)
- [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap) for making code cleaner
- [Gatekeeper](https://github.com/prose/gatekeeper) for getting a token from GitHub using user's code. GitHub says:

  > GitHub's OAuth implementation supports the standard authorization code grant type. The implicit grant type is not supported.

### What's not here

- [Redux](https://github.com/reactjs/redux)
- [React Router](https://github.com/ReactTraining/react-router)
- Tests :cry:

## How to start

1. Clone
2. Register a [GitHub application](https://github.com/settings/developers)
3. Deploy [a server](https://github.com/prose/gatekeeper) for getting a token from GitHub
4. Create `.env` file
5. `npm install`
6. `npm start`
