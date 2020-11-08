# e2e-ui-test

Run Them Tests

all: npm test

just homePage: npm run cy:home

just loginPage: npm run cy:login

just signupPage: npm run cy:signup

just eventsPage: npm run cy:events

headless: npm run cy:headless

ci: npm run ci // run in CI-CD pipeline
