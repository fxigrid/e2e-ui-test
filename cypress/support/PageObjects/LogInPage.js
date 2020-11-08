class LogInPage {

    visit() {
        cy.visit('/auth/login');
    }

    getEmailTextBox() {
        return cy.get('#email');
    }
    getPasswordTextBox() {
        return cy.get('#password');
    }
    getLogInButton() {
        return cy.get('#login');
    }

    // log in to the application
    logIn(email, password) {
        this.getEmailTextBox().clear();
        this.getEmailTextBox().type(email);
        this.getPasswordTextBox().clear();
        this.getPasswordTextBox().type(password);
        this.getLogInButton().click();
        cy.log('Log In Attempted');
        // check login is successful 
        cy.url().should('contain', 'my-first-event/chat');
    }


}
export default LogInPage