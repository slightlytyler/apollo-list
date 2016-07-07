# Apollo List

[![Build Status](https://travis-ci.org/slightlytyler/apollo-list.svg?branch=master)](https://travis-ci.org/slightlytyler/apollo-list)

A craigslist lookalike built with React + Redux + Apollo
Checkout the backend [Gestalt List](https://github.com/jacobhausler/gestalt-list)

## Install

```
git clone git@github.com:slightlytyler/apollo-list.git
npm install
npm run dev
```

Navigate to `localhost:3000` in your browser.

#### Dev Tools

[Install](https://github.com/zalmoxisus/redux-devtools-extension) the dev tools and launch them from your browser.

## Testing

#### Single run

```
npm run test
```

#### Watch

```
npm run test:watch
```

Packages can be tested via their `test.js` file.

Tools you'll need to be familiar with: [karma](https://karma-runner.github.io/1.0/index.html), [mocha](https://mochajs.org/), [chai](http://chaijs.com/), [sinon](http://sinonjs.org/), [enzyme](https://github.com/airbnb/enzyme), [sinon-chai](https://github.com/domenic/sinon-chai), [chai-enzyme](https://github.com/producthunt/chai-enzyme).

After starting the tests **don't** close the spawned chrome browser, just minimize it.

## Deployment

```
npm run deploy
```
