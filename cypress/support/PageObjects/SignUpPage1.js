class SignUpPage1 {


    visit() {
        cy.visit('/auth/register');
    }

    getFirstName() {
        return cy.get('#first-name');
    }
    getLastName() {
        return cy.get('#last-name');
    }
    getEmail() {
        return cy.get('#email');
    }

    getPassword() {
        return cy.get('#password');
    }
    getConfirmPassword() {
        return cy.get('#confirm-password');
    }
    getPrivacyCheckbox() {
        return cy.get('#privacy');
    }

    getSignUpButton() {
        return cy.get('#continue');
    }

    // Fill up Sign Up Form I
    signUpFormI(dataPageI) {

        this.getFirstName().type(dataPageI[0]);
        this.getLastName().type(dataPageI[1]);

        this.getEmail().type(dataPageI[2]);

        this.getPassword().type(dataPageI[3]);
        this.getConfirmPassword().type(dataPageI[3]);

        this.getPrivacyCheckbox().click();

        this.getSignUpButton().click();
        // check if url is navigated to form page 2
        cy.url().should('contain', 'auth/register2');

    }


}
export default SignUpPage1