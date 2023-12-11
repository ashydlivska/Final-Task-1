it.only('Check that locked-out user cannot log-in with the valid credentials', function () { 
   cy.visit('https://www.saucedemo.com/')
//Check that locked-out user cannot log-in with the valid credentials:
   cy.get('[data-test=username]').type('locked_out_user')
   cy.get('[data-test=password]').type('secret_sauce')
   cy.get('#login-button').click()
//The label is visible with the text “Sorry, this user has been locked out”
    cy.get('[class="error-message-container error"]').should('contain', 'Sorry, this user has been locked out')
 })
  