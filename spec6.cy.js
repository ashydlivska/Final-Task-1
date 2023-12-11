it.only('Check that a valid user can add any item from the items list to the cart.', function () { 
 cy.visit('https://www.saucedemo.com/')
 //Check that a valid user can log in with the valid credentials:
cy.get('[data-test=username]').type('standard_user')
cy.get('[data-test=password]').type('secret_sauce')
cy.get('#login-button').click()

  // Add a product to the shopping cart
cy.get('.inventory_item').first().as('firstProduct');
cy.get('@firstProduct').find('.btn_inventory').click();

  // Open the shopping cart
cy.get('.shopping_cart_link').click();

  // Verify product name and price in the cart
cy.get('.cart_item').first().as('cartItem');
cy.get('@cartItem').find('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
cy.get('@cartItem').find('.inventory_item_price').should('have.text', '$29.99');
});