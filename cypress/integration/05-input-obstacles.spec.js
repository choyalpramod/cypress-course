/// <reference types="cypress" />

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {
    cy.get('[data-test="select-input"]');
    cy.get('[data-test="select-result"]');
  });

  it('should find and control a checkbox input', () => {
    cy.get('[data-test="checkbox-tomato"]');
    cy.get('[data-test="checkbox-result"]').contains('(None)');
    cy.get('[data-test="checkbox-result"]');
  });

  it('should find and control a radio input', () => {
    cy.get('[data-test="radio-ringo"]').check();
    cy.get('[data-test="radio-result"]').contains('Ringo');
  });

  it('should find and control a color input', () => {
    cy.get('[data-test="color-input"]').invoke('val', '#FF0000').trigger('input');
    cy.get('[data-test="color-result"]').contains('#ff0000');
  });

  it.only('should find and control a date input', () => {
    cy.get('[data-test="date-input"]').invoke('val', '2020-01-01').trigger('input');
    cy.get('[data-test="date-result"]').contains('2020-01-01');
  });

  it('should find and control a range input', () => {
    cy.get('[data-test="range-input"]');
    cy.get('[data-test="range-result"]');
  });

  it('should find and control a file input', () => {
    cy.get('[data-test="file-input"]');
    cy.get('[data-test="file-result"]');
  });
});
