/* eslint-disable cypress/no-unnecessary-waiting */
Cypress.Commands.add("configurePhone", (size = 'Fullscreen 5.5” display', carrier = 'Unlocked', color = 'Just Black', storage = '64GB') => {
    cy.server()
    cy.route('https://play.google.com/**').as('play')
    cy.route('https://www.gstatic.com/**').as('gstatic')
    cy.route('https://store.google.com/**').as('store')
    
    cy.wait('@gstatic')
    cy.get('.bar-wrap').within(() => {
        cy.get('button').contains('Buy').click()
    })
    
    cy.wait('@gstatic')
    cy.url().should('include', 'config')
    cy.get('.mqn-lobby__cards-container').within(() => {
        cy.get('.mqn-lobby__card').contains(size).parents().eq(3).click()
    })

    cy.get('.mannequin')
    cy.get('.mannequin-fade-out-from-left').should('not.be.visible')

    cy.get('.mqn-h-cards__container').within(() => {
        cy.get('.mqn-h-cards__card').contains(carrier).click()
    })

    cy.get('.mannequin')
    cy.get('.mannequin-fade-out-from-left').should('not.be.visible')

    cy.get('.mqn-lobby-swatch').within(() => {
        cy.get('.mqn-lobby-swatch__card').contains(color).parents().eq(3).click()
    })

    cy.get('.mannequin')
    cy.get('.mannequin-fade-out-from-left').should('not.be.visible')

    cy.get('.mqn-cards__cards-container').within(() => {
        cy.get('.mqn-cards__card').contains(storage).click()
    })

    cy.get('.mannequin')
    cy.get('.mannequin-fade-out-from-left').should('not.be.visible')

    cy.get('.navigator').within(() => {
        cy.get('button').contains('Next').click()
    })
    
    cy.get('.mannequin')
    cy.get('.mannequin-fade-out-from-left').should('not.be.visible')

    cy.get('.review-panel').within(() => {
        cy.get('button').contains('Add to cart').click()
    })
    
    cy.get('.mannequin')
    cy.get('.mannequin-fade-out-from-left').should('not.be.visible')

    cy.get('.interstitial-header').within(() => {
        cy.get('button').contains('Go to cart').click()
    })
    
    cy.get('.cart-button').within(() => {
        cy.get('.guest-checkout-button').click()
    })
    
    cy.wait(['@store', '@gstatic'])
    cy.get('.checkout-page-container').should('be.visible')
    cy.get('.spinner-wrapper').should('not.be.visible')
})