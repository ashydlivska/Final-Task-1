it.only('5)	Check that a valid (performance_glitch_user) user can log-in with the valid credentials, but with long timeout.', function () { 
   cy.visit('https://www.saucedemo.com/')
//Check that performance_glitch_user can log in with the valid credentials:
   cy.get('[data-test=username]').type('performance_glitch_user')
   cy.get('[data-test=password]').type('secret_sauce')
   cy.get('#login-button', { timeout: 10000 }).click() //10 sec timeout was applied here
//Page (URL) is changed to the one from "Expected result":
   cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') 
//The logout element is available in the sidebar:
   cy.get('[id="react-burger-menu-btn"]').click()
   cy.get('[id="logout_sidebar_link"]').should('exist')
 })
  