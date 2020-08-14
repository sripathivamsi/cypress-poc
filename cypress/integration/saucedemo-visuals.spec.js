/// <reference types="Cypress" />

import * as saucepage from '../page-objects/sauce'
describe('visual validation', () => {

    before(() => saucepage.navigate())
    beforeEach(() => cy.eyesOpen({appName: 'Sauce Demo', batchName: 'Sauce one'}))
    afterEach(() => cy.eyesClose())

    it('It should look good' , () => {
        cy.eyesCheckWindow('login page')
        saucepage.login("standard_user", "secret_sauce")
        cy.eyesCheckWindow('add to cart')
        saucepage.addToCart("ADD TO CART")
        cy.eyesCheckWindow('added to cart')
    }

    )

})