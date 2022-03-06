// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')

    cy.visit('/about')
    cy.contains('h1', 'This is an about page')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('My First Studio Test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5050/');
    cy.get('[href="/about"]').click();
    cy.get('.about > h1').click();
    cy.get('.about > h1').should('be.visible');
    cy.get('.about > h1').click();
    cy.get('.about > h1').should('have.text', 'This is an about page');
    /* ==== End Cypress Studio ==== */
  });
})
