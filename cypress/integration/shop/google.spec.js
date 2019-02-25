import { configurePhone } from '../components/configure'

/* eslint-disable cypress/no-unnecessary-waiting */
describe('Google store', () => {
    it('can be visited', () => {
        cy.visit('https://store.google.com/')
    })

    it('can navigate to Pixel 3 page', () => {
        cy.get('.navbar').within(() => {
            cy.get('div').contains('Browse').click()
        })
        cy.get('.nav-links-panel-wrap').within(() => {
            cy.get('li').contains('Phones').click()
        })

        cy.get('div[id="product-ribbon"]').within(() => {
            cy.get('a').contains('Pixel 3').click()
        })

        cy.url().should('include', 'pixel_3')
    })

    it('can configure Pixel 3', () => {
        configurePhone('Fullscreen 5.5” display', 'Unlocked', 'Just Black', '64GB')
    })

    it('can checkout cart', () => {
        cy.get('iframe[name="paymentsParentDivIdIframe"]').then($iframe => {
            const $body = $iframe.contents().find('body')
        cy.wrap($body)
            .find('input[name=ContactEmailField]').type('test@test.com')
        cy.wrap($body)
            .find('input[name=ContactEmailConfirm]').type('test@test.com')
        })
    })
})