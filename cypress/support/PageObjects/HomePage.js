class HomePage {

    visit() {
        cy.visit('/');
    }

    getLogInButton() {
        return cy.get(':nth-child(1) > ._3wAa');
    }
    getSignUpButton() {
        return cy.get(':nth-child(2) > ._3wAa');
    }

    checkHomePageforLoggedOutUser() {
        // check buttons are visible
        this.getLogInButton().should('contain', 'Log in');
        this.getSignUpButton().should('contain', 'Sign up');
    }

    checkHomePageforLoggedInUser() {
        // check buttons are not visible
        this.getLogInButton().should('not.exist');
        this.getSignUpButton().should('not.exist');
    }

    checkSignUpButtonOpensSignUpPage() {
        this.getSignUpButton().click();
        // check url is navigated to  Sign Up Page
        cy.url().should('contain', 'auth/register');

    }

    checkLogInButtonOpensLoginPage() {
        this.getLogInButton().click();
        // check url is navigated to  Log In Page
        cy.url().should('contain', 'auth/login');

    }


}
export default HomePage