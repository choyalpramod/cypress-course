/// <reference types="cypress" />

const restaurants = [
  'Chick-fil-A',
  'McDonalds',
  'In-N-Out',
  'KFC',
  'Jack In The Box',
  'Jamba Juice',
  'Starbucks',
  'Dairy Queen',
  'Burger King',
  'Chipotle',
  'Taco Bell',
  'Five Guys',
  'Sonic',
  'Subway',
  'Panera Bread',
];

const properties = [
  'name',
  'whereToOrder',
  'description',
  'secret',
  'ingredients',
  'popularity',
  'price',
  'howToOrder',
];

const ratings = [1, 2, 3, 4, 5, 6, 7];

describe('Secret Menu Items', () => {
  beforeEach(() => {
    cy.visit('/secret-menu');
  });

  it('should exist have the title on the page', () => {
    cy.get('h1').should('contain', 'Secret Menu Items');
  });

  for (const property of properties) {
    it(`should have a table with a column for ${property}`, () => {
      cy.get(`#show-${property}`).should('be.checked');
      cy.get(`#${property}-column`).should('exist');
    });

    it(`should hide ${property} when unchecked`, () => {
      cy.get(`#show-${property}`).should('be.checked');
      cy.get(`#show-${property}`).click();
      cy.get(`#${property}-column`).should('be.hidden');
    });
  }

  for (const restaurant of restaurants) {
    it(`should have ${restaurant}`, () => {
      cy.get('#restaurant-visibility-filter').select(restaurant);
      cy.get('td[headers="whereToOrder-column"]').contains(restaurant);
      // cy.get('td[headers="whereToOrder-column"]').should('contain', restaurant);
    });
  }

  describe.only('rating filter', () => {
    beforeEach(() => {
      cy.get('#minimum-rating-visibility').as('rating-filter');
    });

    for (const rating of ratings) {
      it(`should show items with a rating of ${rating} or higher`, () => {
        cy.get('@rating-filter').invoke('val', rating).trigger('change');
        cy.get('td[headers="popularity-column"]').each(($el) => {
          expect(parseInt($el.text())).to.be.gte(rating);
        });
      });
    }
  });
});
