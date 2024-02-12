/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');

    cy.get('[data-test="new-item-input"]').as('newInput');
    cy.get('[data-test="add-item"]').as('addItemButton');

    cy.get('[data-test="filter-items"]').as('filterInput');

    cy.get('[data-test="mark-all-as-unpacked"]').as('unpackedButton');
    cy.get('[data-test="remove-all"]').as('removeAllButton');

    cy.get('[data-test="items"]').as('allItems');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems');
    cy.get('[data-test="items-packed"]').as('packedItems');
  });

  it('should hold onto an alias', () => {
    cy.get('@allItems').should('not.contain.text', 'iPhone 15');
  });

  it('should', () => {
    cy.get('@filterInput').type('iPhone');
    cy.get('@unpackedItems')
      .find('label')
      .first()
      .invoke('text')
      .then((text) => {
        cy.get('@foundItem').click();
        cy.get('@packedItems').contains(text);
      });
  });
});
