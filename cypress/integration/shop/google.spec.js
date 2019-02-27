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
        cy.configurePhone('Fullscreen 5.5” display', 'Unlocked', 'Just Black', '64GB')
    })

    it('can checkout cart', () => {
        cy.get('.spinner-wrapper').should('not.be.visible')
        cy.get('iframe[name="paymentsParentDivIdIframe"]').then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body)
                .find('input[name=ContactEmailField]').type('test@test.com')
            cy.wrap($body)
                .find('input[name=ContactEmailConfirm]').type('test@test.com', {force: true})
            
            cy.wrap($body)
                .find('div').contains('Name and shipping address').click()
            cy.wrap($body)
                .find('.b3-collapsable-container-expanded-content').should('be.visible')
            
            cy.wrap($body)
                .find('label').contains('Name').click()      
            cy.wrap($body)
                .find('label').contains('Address line 1').click()           
            cy.wrap($body)
                .find('label').contains('City').click()
            cy.wrap($body)
                .find('label').contains('ZIP code').click()
            cy.wrap($body)
                .find('label').contains('Name').click()  

            cy.wrap($body)
                .find('p').contains('Name is required').should('be.visible')
            cy.wrap($body)
                .find('p').contains('Address line 1 is required').should('be.visible')
            cy.wrap($body)
                .find('p').contains('City is required').should('be.visible')
            cy.wrap($body)
                .find('p').contains('ZIP code is required').should('be.visible')

            cy.wrap($body)
                .find('input[name="RECIPIENT"]').first().type('Gabriel Ma')
            cy.wrap($body)
                .find('input[name="ADDRESS_LINE_1"]').first().type('200 Park Ave South{downarrow}{enter}')
            cy.wrap($body)
                .find('input[name="LOCALITY"]').first().type('New York')
            cy.wrap($body)
                .find('input[name="POSTAL_CODE"]').first().type('10003')

            cy.wrap($body)
                .find('p').contains('Name is required').should('not.be.visible')
            cy.wrap($body)
                .find('p').contains('Address line 1 is required').should('not.be.visible')
            cy.wrap($body)
                .find('p').contains('City is required').should('not.be.visible')
            cy.wrap($body)
                .find('p').contains('ZIP code is required').should('not.be.visible')
        })
    })
})