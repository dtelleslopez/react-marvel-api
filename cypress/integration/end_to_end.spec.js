describe('End to end test', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
    cy.visit('/');
    cy.wait(2000);
  });

  it('Should render a search bar with an empty input value', () => {
    cy.get('[data-cy=search-bar]').children().first().should('have.value', '');
  });

  it('Should render some list items', () => {
    cy.get('[data-cy=list]').find('[data-cy=list-item]');
  });

  it('Should submit a search with `Spider-Man` value', () => {
    cy.get('[data-cy=search-bar]').children().first()
      .type('Spider-Man', { delay: 100 })
      .should('have.value', 'Spider-Man');

    cy.get('[data-cy=search-bar]').submit();
  });

  it('Should find a result for `Spider-Man` value', () => {
    cy.get('[data-cy=search-bar]').children().first()
      .type('Spider-Man', { delay: 100 })
      .should('have.value', 'Spider-Man');

    cy.get('[data-cy=search-bar]').submit();

    cy.wait(2000);

    cy.get('[data-cy=list]').find('[data-cy=list-item]').within(() => {
      cy.contains('Spider-Man').end();
      cy.contains('Bitten by a radioactive spider');
      cy.contains('Read more');
    });
  });

  it('Should not find a result for `spidermanco` value', () => {
    cy.get('[data-cy=search-bar]').children().first()
      .type('spidermanco', { delay: 100 })
      .should('have.value', 'spidermanco');

    cy.get('[data-cy=search-bar]').submit();

    cy.wait(2000);

    cy.get('[data-cy=no-results]').contains('No results :(');
  });
});
