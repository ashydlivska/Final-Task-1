it.only('check a valid user (standard_user) can log out ', function () { 
   cy.visit('https://www.saucedemo.com/')
//Check that a valid user can log-in with valid credentials:
   cy.get('[data-test=username]').type('standard_user')
   cy.get('[data-test=password]').type('secret_sauce')
   cy.get('#login-button').click()
//Page (URL) is changed to 'https://www.saucedemo.com/inventory.html':
   cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
//Check that a valid user can log out:
   cy.get('[id="react-burger-menu-btn"]').click()
   cy.get('[id="logout_sidebar_link"]').click()
//Page (URL) is changed to initial one:
   cy.url().should('eq', 'https://www.saucedemo.com/')
    })
  