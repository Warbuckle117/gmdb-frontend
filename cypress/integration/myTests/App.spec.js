/// <reference types="cypress" />


describe("<App />", () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })
    
    it("The navbar should have the title 'GMDB' with 'Home' and 'Login' links and a 'Search' button", () => {
        
        cy.contains('GMDB')
        cy.contains('Home')
        cy.contains('Login')
        cy.contains('Search')

    })


    it("Should display movie list without logging in", () => {

        cy.contains('title')
    })
    
    it("contains a list of Images", () => {
        cy.get('div[class="img"]').find("img")
    })
})
