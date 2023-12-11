it.only('8)	Check that a valid user can login when screen width is less than 1060px', function () { 
//Change screen width to 1000 px
cy.viewport(1000, 480)
cy.visit('https://www.saucedemo.com/')
//Check that a valid user can log in with the valid credentials:
   cy.get('[data-test=username]').type('standard_user')
   cy.get('[data-test=password]').type('secret_sauce')
   cy.get('#login-button').click()
//Page (URL) is changed to the one from "Expected result":
   cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') 
//The logout element is available in the sidebar:
   cy.get('[id="react-burger-menu-btn"]').click()
   cy.get('[id="logout_sidebar_link"]').should('exist')
   })
