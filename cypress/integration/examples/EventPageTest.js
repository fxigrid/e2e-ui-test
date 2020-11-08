// type definitions for Cypress object "cy"
// <reference types="cypress" />
import HomePage from '../../support/PageObjects/HomePage';
import LogInPage from '../../support/PageObjects/LogInPage';
import EventPage from '../../support/PageObjects/EventPage';

describe('Event Page : Test Scenarios', function () {

  beforeEach(function () {
    cy.fixture('userdata').then(function (data) {
      this.data = data;

    })
  })

  it('Event Page :Send feed', function () {
    const logInPage = new LogInPage();
    logInPage.visit();
    logInPage.logIn(this.data.email, this.data.password);
    const eventPage = new EventPage();
    // Send Feed Message to  the Feed Index 
    eventPage.sendFeed(this.data.feedNumber, this.data.feedmessage);
    cy.log('Feed Sent Logged Correctly');
    eventPage.logOut();
  })


  it('Event Page :Send DM', function () {
    const logInPage = new LogInPage();
    logInPage.visit();
    logInPage.logIn(this.data.email, this.data.password);
    const eventPage = new EventPage();
     // Send DM Message to  the DM Contact Index 
    eventPage.sendDM(this.data.dmNumber, this.data.dmmessage);
    cy.log('DM Sent Logged Correctly');
    eventPage.logOut();
  })

})