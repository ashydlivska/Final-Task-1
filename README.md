# Assignment 1
This folder contains a completion of Assignment 1: Create automated Web UI tests using Cypress framework. 

## Prerequisites
Be sure to have the [VSCode IDE](https://code.visualstudio.com/) installed on your PC. 

This project requires [Node.js](https://nodejs.org/en/) to be installed on your machine. Node.js comes with npm (Node Package Manager).

## Getting Started
Open the IDE and navigate to the folder that contains Cypress test files. Run the npm and install Cypress in before running tests:

**Setup the project with Cypress**

To set up a new project in Cypress follow the below steps

Initialize a new project (this command creates a package.json file if it is not present)
```bash
npm init -y
```

Install Cypress and its dependencies. This command installs Cypress locally as a devDependency and adds it to the package.json file
```bash
npm install cypress --save-dev
```
*See also: [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)*

Open Cypress Launchpad
```bash
npx cypress open
```
Cypress will set up its folder structure if it doesn't exist.

*NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.*

## Test Execution

Once the Cypress Launchpad is open, select the "E2E Testing" option
![E2E](https://docs.cypress.io/img/guides/getting-started/opening-the-app/choose-testing-type.png)

On the next step, the Launchpad will scaffold out a set of configuration files appropriate to your chosen testing type, and the changes will be listed for you to review.
![QuickConfig](https://docs.cypress.io/img/guides/getting-started/opening-the-app/scaffolded-files.png)

Then select any preferred browser and click the "Start E2E Testing" button
![Browser](https://docs.cypress.io/img/guides/getting-started/opening-the-app/select-browser.png)

This action will open the window of the previously selected browser.

*See also: [Opening the App](https://docs.cypress.io/guides/getting-started/opening-the-app#The-Launchpad)*

Open the "Specs" folder. You will see a list of Cypress specs. 
![Specs](https://docs.cypress.io/img/guides/end-to-end-testing/writing-your-first-end-to-end-test/spec-list-with-new-spec.png)

Click on any spec and the test will be executed automatically (as shown on example below)
![Execution](https://docs.cypress.io/img/guides/retry-ability/retry-assertion.gif)

Alternatively, you can run all tests outside the Cypress Launchpad using the command line. *See more here [Command Line](https://docs.cypress.io/guides/guides/command-line)*

## Reporting
You can tests specifying a specific Mocha reporter
```bash
npx cypress run --reporter json
```

To force Cypress to render the Runner UI, use --runner-ui
```bash
npx cypress run --runner-ui
```
