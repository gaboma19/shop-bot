/* eslint-disable cypress/no-unnecessary-waiting */
export const configurePhone = (size = 'Fullscreen 5.5” display', carrier = 'Unlocked', color = 'Just Black', storage = '64GB') => {
    cy.get('.bar-wrap').within(() => {
        cy.get('button').contains('Buy').click()
    })
    
    cy.wait(2000)
    
    cy.get('.mqn-lobby__cards-container').within(() => {
        cy.get('.mqn-lobby__card').contains(size).parents().eq(3).click()
    })
    
    cy.wait(2000)
    
    cy.get('.mqn-h-cards__container').within(() => {
        cy.get('.mqn-h-cards__card').contains(carrier).click()
    })
    
    cy.wait(2000)
    
    cy.get('.mqn-lobby-swatch').within(() => {
        cy.get('.mqn-lobby-swatch__card').contains(color).parents().eq(3).click()
    })
    
    cy.wait(2000)
    
    cy.get('.mqn-cards__cards-container').within(() => {
        cy.get('.mqn-cards__card').contains(storage).click()
    })
    
    cy.wait(2000)
    
    cy.get('.navigator').within(() => {
        cy.get('button').contains('Next').click()
    })
    
    cy.get('.review-panel').within(() => {
        cy.get('button').contains('Add to cart').click()
    })
    
    cy.get('.interstitial-header').within(() => {
        cy.get('button').contains('Go to cart').click()
    })
    
    cy.wait(5000)
    
    cy.get('.cart-button').within(() => {
        cy.get('.guest-checkout-button').click()
    })
    
    cy.wait(15000)
}
