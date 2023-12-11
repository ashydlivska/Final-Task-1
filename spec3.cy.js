it.only('Check that a valid (standard_user) user cannot log-in with the invalid credentials', function () { 
   cy.visit('https://www.saucedemo.com/')
//Check that a valid user can not log-in with the invalid credentials:
   cy.get('[data-test=username]').type('standard_user')
   cy.get('[data-test=password]').type('secret') //here is the incorrect password 'secret'
   cy.get('#login-button').click()
//The label is visible with the text “Username and password do not match any user in this service.”
    cy.get('[class="error-message-container error"]').should('contain', 'Username and password do not match any user in this service')
 })
  