# The Cat API Test

## The test has been done with Javascript & Cypress.io

Concept for Automation functional testing using Javascript, Cypress.io and Cucumber. It shows any of solutions for automation test suite for The Cat API. Javascript is the language used to write the test code.

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium. This enables you to write faster, easier and more reliable tests.

## Installation

First of all you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed. Once you have them, in order to install the tests, follow the next steps from terminal:

Clone the repository project:

```
git clone https://github.com/JrVillabona/the-cat-api.git
cd the-cat-api
```

Install the dependencies:

```
npm install
```

## Execution

In order to execute the tests, you just need to execute the following commands.

If you prefer in headless mode:

```
npm run test
```

Or if you want to perform with the Cypress console:

```
npm run cypress:open
```

Then select whether you want to run a particular test or if you prefer to run all the tests. Select the browser in which you want to run the tests, remember that Cypress supports Chrome, Edge, Firefox and Electron. After that, click on **Run all specs**.
Note: Excluding Electron, any browser you want to run Cypress tests in needs to be installed on your local system.

## Documentation

- Cypress: https://www.cypress.io/
