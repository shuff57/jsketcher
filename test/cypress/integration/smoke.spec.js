/// <reference types="cypress" />

describe('Smoke', () => {
  it('loads index.html and initializes app', () => {
    cy.visit('/index.html#TestProject');
    cy.get('#app').should('exist');
    cy.window({ timeout: 20000 }).its('__CAD_APP').should('exist');
  });

  it('loads sketcher.html and initializes app', () => {
    cy.visit('/sketcher.html#TestProject');
    cy.get('#app').should('exist');
    cy.window({ timeout: 20000 }).its('__CAD_APP').should('exist');
  });
});

