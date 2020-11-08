class EventPage {

    visit() {
        cy.visit('/chat');
    }

    getLogOutButton() {
        return cy.get('.sc-fzoXzr > .iy4W > svg');
    }

    getAllFeedLinks() {
        return cy.get('.sc-fzoant > .sc-fzplWN > .sc-fznMnq');
    }
    getOpenedFeedTextBox() {
        return cy.get('#chat-text-input', { timeout: 10000 });
    }
    getOpenedFeedSendButton() {
        return cy.get('._38TU');
    }
    getMessageSentToFeed() {
        return cy.get('._3npN');
    }

    getDirectMessageLinks() {
        return cy.get(':nth-child(3) > .iy4W > svg > g > path')
    }

    getAllDMContactLinks() {
        return cy.get("a[href^='/your-university/my-first-event/chat/start/mentor']");
    }

    getOpenedDMTextBox() {
        return cy.get('#chat-input')
    }
    getOpenedDMSendButton() {
        return cy.get('#send')
    }
    getMessageSentToDM() {
        return cy.get('._3npN');
    }

    // logout user
    logOut() {
        this.getLogOutButton().click();
        //check logout is successful
        cy.url().should('contain', 'my-first-event');
    }

    // Send Feed message 
    sendFeed(feedNumber, feedmessage) {
        this.getAllFeedLinks().eq(feedNumber).click();
        cy.wait(5000);
        this.getOpenedFeedTextBox().click({ force: true });
        this.getOpenedFeedTextBox().type(feedmessage);
        this.getOpenedFeedSendButton().click();
        //check message is send correctly above
        this.getMessageSentToFeed().last().should('contain', feedmessage);

    }

    // Send DM message 
    sendDM(dmNumber, dmmessage) {
        this.getDirectMessageLinks().click();
        cy.wait(5000);
        this.getAllDMContactLinks().eq(dmNumber).click();
        this.getOpenedDMTextBox().type(dmmessage);
        this.getOpenedDMSendButton().click();
        //check message is send correctly above
        this.getMessageSentToDM().last().should('contain', dmmessage);

    }



}
export default EventPage