class SignUpPage2 {


    visit() {
        cy.visit('/auth/register2');
    }

    getdateOfEntrySelectBox() {
        return cy.get('#dateOfEntry');
    }
    getcountryTextBox() {
        return cy.get('#country');
    }

    getCountryDropDownItem() {
        return cy.get('.dropdown-item');
    }

    getdegreeLevelInterestedSelectBox() {
        return cy.get('#degree-level');
    }

    getAreaOfStudyTextBox() {
        return cy.get('#degrees');
    }
    getIDontKnowLink() {
        return cy.get('.bBsC > .iy4W');
    }
    getDOBTextBox() {
        return cy.get('#\\35 f8583aaf9d03d0010db0033');
    }

    getPostCodeTextBox() {
        return cy.get('#\\35 f8583c3dc553a00133adbe9');
    }

    getFavoriteArtistSelectBox() {
        return cy.get('#\\35 f8583d6dc553a00145c06d2');
    }

    getPrivacyCheckBox() {
        return cy.get('#marketing');
    }

    getSignUpButton() {
        return cy.get('#continue');
    }

    // Fill up Sign Up Form II
    signUpFormII(dataPageII) {

        this.getdateOfEntrySelectBox().select(dataPageII[0]);
        this.getcountryTextBox().type(dataPageII[1]);
        this.getCountryDropDownItem().click();

        this.getdegreeLevelInterestedSelectBox().select(dataPageII[2], { force: true });
        this.getIDontKnowLink().click();
        this.getDOBTextBox().type(dataPageII[3]).type('{enter}');
        this.getPostCodeTextBox().type(dataPageII[4]);
        this.getFavoriteArtistSelectBox().select(dataPageII[5]);
        this.getPrivacyCheckBox().click();

        this.getSignUpButton().click();
        // check if Sign up is completed and user is in Events Page
        cy.url().should('contain', '/chat');

    }



}
export default SignUpPage2