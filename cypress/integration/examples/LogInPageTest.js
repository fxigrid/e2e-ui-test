// type definitions for Cypress object "cy"
// <reference types="cypress" />
import HomePage from '../../support/PageObjects/HomePage';
import LogInPage from '../../support/PageObjects/LogInPage';
import EventPage from '../../support/PageObjects/EventPage';

describe('LogIn Page Test Scenarios', function () {



  beforeEach(function () {
    cy.fixture('userdata').then(function (data) {
      this.data = data;

    })
  })

  it('LogIn Page : User Able to LogIn with Valid Credentials', function () {
    const logInPage = new LogInPage();
    logInPage.visit();
    // check log in with credentials
    logInPage.logIn(this.data.email, this.data.password);
    const eventPage = new EventPage();
    eventPage.logOut();
    // check logout is done correctly
    cy.log('User Logged Correctly');

  })

  it('LogIn Page :LoggedIn User do not Sees LogIn or SignUp Options after login', function () {
    const logInPage = new LogInPage();
    logInPage.visit();
    logInPage.logIn(this.data.email, this.data.password);
    const homePage = new HomePage();
    homePage.visit();
    // Check Loggeed In User is Not  shown LogIn ans SignUp options
    homePage.checkHomePageforLoggedInUser();
    cy.log('Home Page Displayed Correctly');

  })


})