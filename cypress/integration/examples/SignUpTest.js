// type definitions for Cypress object "cy"
// <reference types="cypress" />

import SignUpPage1 from '../../support/PageObjects/SignUpPage1';
import SignUpPage2 from '../../support/PageObjects/SignUpPage2';
import LogInPage from '../../support/PageObjects/LogInPage';
import EventPage from '../../support/PageObjects/EventPage';

describe('LogIn Test', function () {

  // Signup Email to be shared across tests
  var uniqueEmail;

  beforeEach(function () {
    cy.fixture('signup').then(function (data) {
      this.data = data;

    })
  })

  it('Sign Up Page :User Able to SignUp with Valid Data', function () {
    const signUpPage1 = new SignUpPage1();

    // Fill Form I 
    signUpPage1.visit();
    cy.wait(5000);
    uniqueEmail = Math.random().toString(36).substr(2, 9) + this.data.email;
    var formIData = [this.data.firstname, this.data.lastname, uniqueEmail, this.data.password];
    signUpPage1.signUpFormI(formIData);

    // Fill Form I 
    const signUpPage2 = new SignUpPage2();
    var formIIData = [this.data.dateOfEntry, this.data.country, this.data.degree, this.data.dob, this.data.postalcode, this.data.favartist];
    signUpPage2.signUpFormII(formIIData);
    cy.log('User Signed Up Correctly');

    // Log Out
    const eventPage = new EventPage();
    eventPage.logOut();
    cy.log('User Logged Correctly');


  })


  it('Sign Up Page :User Able to LogIn with Signup Just Created ', function () {

    const logInPage = new LogInPage();
    logInPage.visit();
    cy.log(uniqueEmail);
    // Log In with User Created above
    logInPage.logIn(uniqueEmail, this.data.password);
    const eventPage = new EventPage();
    eventPage.logOut();
    cy.log('User Logged Correctly');

 



  })



})