/// <reference types="Cypress" />

export function navigate() {
    cy.visit('https://www.saucedemo.com/')
  }

export function login(username, password) {
     //Login
     cy.get('[data-test=username]').type(username)
     cy.get('[data-test=password]').type(password)
     cy.get('#login-button').click()
 
     //Navigation to the inventory page
     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html' )
     cy.get('.peek').should('be.visible')
     cy.get('.bm-burger-button > button').should('be.visible')
     cy.get('path').should('be.visible')
     cy.get('.inventory_list').should('be.visible')
  }

export function addToCart(buttonText) {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').and('have.text', buttonText).click()
    cy.get('.fa-layers-counter').should('be.visible')
  }
