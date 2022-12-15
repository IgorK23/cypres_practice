const { generateUser } = require('../support/generate');

beforeEach(() => {
  cy.visit('/')
});

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.get('[href="#register"]')
      .click();

    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);
      
    cy.get('[placeholder="Password"]')
      .type(password);

    cy.get('[type="submit"]')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
  });
});
