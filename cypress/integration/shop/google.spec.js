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
        cy.get('.bar-wrap').within(() => {
            cy.get('button').contains('Buy').click()
        })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000)

        cy.get('.mqn-lobby__cards-container').within(() => {
            cy.get('.mqn-lobby__card').contains('Fullscreen 5.5” display').parents().eq(3).click()
        })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000)

        cy.get('.mqn-h-cards__container').within(() => {
            cy.get('.mqn-h-cards__card').contains('Unlocked').click()
        })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000)

        cy.get('.mqn-lobby-swatch').within(() => {
            cy.get('.mqn-lobby-swatch__card').contains('Just Black').parents().eq(3).click()
        })
        
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000)

        cy.get('.mqn-cards__cards-container').within(() => {
            cy.get('.mqn-cards__card').contains('64GB').click()
        })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
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

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000)

        cy.get('.cart-button').within(() => {
            cy.get('.guest-checkout-button').click()
        })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000)
    })

    it('can checkout cart', () => {
        cy.get('iframe[name="paymentsParentDivIdIframe"]').then($iframe => {
            const $body = $iframe.contents().find('body')
        cy.wrap($body)
            .find('input[name=ContactEmailField]').type('test@test.com')
        cy.wrap($body)
            .find('input[name=ContactEmailConfirm]').type('test@test.com')
        cy.wrap($body)
            .find('div').contains('Name and shipping address').click()
        cy.wrap($body)
            .find('input[name=RECIPIENT]').eq(1).type('Gabriel Ma', { force: true })
        cy.wrap($body)
            .find('input[name=ADDRESS_LINE_1]').type('200 Park Avenue South')
        cy.wrap($body)
            .find('input[name=LOCALITY]').type('New York')
        cy.wrap($body)
            .find('input[name=POSTAL_CODE]').type('10003')
        cy.wrap($body)
            .find('input[name=PHONE_NUMBER]').type('5555555555')
        cy.wrap($body)
            .find('input[name=cardnumber]').type('4242424242424242')
        cy.wrap($body)
            .find('input[name=ccmonth]').type('12')
        cy.wrap($body)
            .find('input[name=ccyear]').type('30')
        cy.wrap($body)
            .find('input[name=cvc]').type('111')
        cy.wrap($body)
            .find('input[name=ccname]').type('Gabriel Ma')
        })
    })
})