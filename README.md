# cypress-poc

# Installation

`npm install`

# Execute tests

Headless mode
`npm test`

Headed mode
`npm run cypress`

Run a single test
`npx cypress run --spec cypress/integration/saucedemo.spec.js`

# Before running visual UI tests

Eyes-cypress is a cypress plugin, in order to be recognized by cypress we need to run the below script provided by eyes-cypress only once.
`npx eyes-setup`

In order to see the results of the visual UI tests in the applitools: 
Open your terminal and write:

`export APPLITOOLS_API_KEY= {yourAPIKey}`

We’ve just created an environment variable with the name APPLITOOLS_API_KEY and put our API key there. The eyes-cypress package automatically uses that environment variable without us needing to tell it to.
` set APPLITOOLS_API_KEY= {yourAPIKey}`

# Reference links

https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
Applitools URL for visual UI tests dashboard: https://auth.applitools.com/users/login
