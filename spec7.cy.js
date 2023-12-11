it.only('Check that a valid user can buy any item from the items list', function () { 
    cy.visit('https://www.saucedemo.com/')
//Check that a valid user can log in with the valid credentials:
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()
//add any item to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//Open the cart and proceed to checkout
    cy.get('[class="shopping_cart_link"]').click()
    cy.get('[id="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Firstname')
    cy.get('[data-test="lastName"]').type('Lastname')
    cy.get('[data-test="postalCode"]').type('0000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
//verify that “Thank you for your order!” text is visible
    cy.get('[id="checkout_complete_container"]').should('contain', 'Thank you for your order!')
 })