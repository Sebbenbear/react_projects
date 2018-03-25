# React Projects

A collection of small projects for exploring React

## Initial project setup

yarn add create-react-app
yarn create-create-app my-app
yarn start

## To install bootstrap components

npm install --save react-bootstrap bootstrap@3

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your src/index.js file:

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

## Add space for API keys

- Add a .env file to root directory.
- Add `REACT_APP_{name-of-key}={key-value}` to .env file (no quotes!)
- Use: `process.env.REACT_APP_{name-of-key}`

## React Bootstrap

This application is styled using react bootstrap.

[Documentation for React Bootstrap can be found here.](https://react-bootstrap.github.io/components/alerts/)

### Example

Load the component with this:
`import { Button } from 'react-bootstrap';`

Use the component like this:
`<Button bsStyle="primary" bsSize="large">Primary</Button>`

## Reference for fetching data in React

See this site for fetching data:
https://www.robinwieruch.de/react-fetching-data/

## Unsplash API

Search for photos by using [this](https://api.unsplash.com/photos/?client_id={REACT_APP_UNSPLASH_ACCESS_KEY}).


