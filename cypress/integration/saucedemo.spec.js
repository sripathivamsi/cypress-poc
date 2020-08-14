/// <reference types="Cypress" />

import {
    navigate,
    login,
    addToCart
  } from '../page-objects/sauce'

describe('Order a sauce item', () => {

    beforeEach(() => {

    navigate()
    login("standard_user", "secret_sauce")
    addToCart("ADD TO CART")
   })

it('should be able to buy an item', () => {

    cy.get('path').click()

    //Cart Overview Page
    cy.get('#cart_contents_container').should('be.visible')
    cy.get('.subheader').should('have.text', 'Your Cart')
    cy.get('.item_pricebar > .btn_secondary').should('be.visible').and('have.text', 'REMOVE')
    cy.get('.btn_action').should('be.visible').and('have.text', 'CHECKOUT').click()

    //Information Page
    cy.get('[data-test=firstName]').type('John')
    cy.get('[data-test=lastName]').type('Doe')
    cy.get('[data-test=postalCode]').type('12435')
    cy.get('.btn_primary').click()

    //Checkout Overview Page
    cy.get('.subheader').should('have.text', 'Checkout: Overview')
    cy.get('.btn_action').should('be.visible').and('have.text', 'FINISH').click()

    //Confirmation Page
    cy.get('.subheader').should('have.text', 'Finish')
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
 })

 it('should be able to remove an item from the cart', () => {
    cy.get('.btn_secondary').and('have.text', 'REMOVE').click()
    cy.get('#cart_contents_container').should('be.not.be.visible')

 })
})