# React Webpack 5 Starter

Gives you a minimal setup to get started with React and Webpack 5. Also comes with linting, formatting and a test setup, plus a Github Action for continuous integration.

## Pre-requisites

- Make sure to have [Node.js](https://nodejs.org/en/) and [nvm](https://github.com/nvm-sh/nvm) installed.
- Create a `.env` file in the root folder.
    - Populate it with the process variables of your choosing, example:

        ```
        NODE_ENV=development
        FOO=bar
        ```

## Install

`$ git clone https://github.com/perjo927/react-webpack5-starter.git`

`$ cd react-webpack5-starter`

`$ nvm use`

`$ npm ci`

## Development Build

`$ npm run build:dev`

## Development Server

`$ npm run start`

## Production Build

`$ npm run build:prod`

## Demo Server

Requires a previous build

`$ npm run demo`

## Analyze Build

### Development Build

`$ npm run bundle:analyze:dev`

### Production Build

`$ npm run bundle:analyze:prod`

## Test

### Single Run

`$ npm run test`

### Watch

`$ npm run test:watch`

## Author

Per Jonsson
