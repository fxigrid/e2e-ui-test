// type definitions for Cypress object "cy"
// <reference types="cypress" />
import HomePage from '../../support/PageObjects/HomePage';
import LogInPage from '../../support/PageObjects/LogInPage';
import EventPage from '../../support/PageObjects/EventPage';

describe('HomePage Test Scenarios :', function () {

    beforeEach(function () {
        cy.fixture('userdata').then(function (data) {
            this.data = data;

        })
    })



    it('HomePage User : Not LoggedIn -Login Page Displayed', function () {
        const homePage = new HomePage();
        homePage.visit();
        // Check Not Loggeed In User is shown LogIn ans SignUp options
        homePage.checkHomePageforLoggedOutUser();
        cy.log('Home Page Displayed Correctly');

    })

    it('HomePage User : Not LoggedIn  - SignUp Button Opens SignUp Page', function () {
        const homePage = new HomePage();
        homePage.visit();
        // Check SignUp Button Opens SignUp Page
        homePage.checkSignUpButtonOpensSignUpPage();
        cy.log('Sign Up Page Displayed Correctly');

    })

    it('HomePage User Not LoggedIn  - LogIn Button Opens LogIn Page', function () {
        const homePage = new HomePage();
        homePage.visit();
        // Check LogIn Button Opens LogIn Page
        homePage.checkLogInButtonOpensLoginPage();
        cy.log('Log In Page Displayed Correctly');

    })


    it('HomePage User :LoggedIn - No LogIn and Sign Up Options Displayed', function () {

        const logInPage = new LogInPage();
        logInPage.visit();
        logInPage.logIn(this.data.email, this.data.password);

        const homePage = new HomePage();
        homePage.visit();
        // Check Loggeed In User is Not  shown LogIn ans SignUp options
        homePage.checkHomePageforLoggedInUser();
        cy.log('Home Page Displayed Correctly');

        // log out
        const eventPage = new EventPage();
        eventPage.logOut();
        // check logout is done correctly
        cy.log('User Logged Correctly');
    

    })


})