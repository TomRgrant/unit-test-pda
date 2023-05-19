describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working number buttons', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })

  it('should have working number buttons', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })

  it('should have working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  it('should have working operator buttons', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to chain operators together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should handel a range of numbers', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-185000')
  })

  it('should be able to handel excepotional circumstances', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })
})