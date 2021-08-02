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

    //As an end user
    //I want to be able to click the 'Home' link
    //So that I can return to the home page

    it("contains an link 'Home' which takes you to the home page", () => {
        //cy.get('.li > a').click()

        cy.contains('Home').click();

        cy.contains('title')

    })


    it("Should display movie list without logging in", () => {

        cy.contains('title')
        // cy.get('input').type('hello world')
    })

    //As an end user 
    //I want to be able to search through the array of movies
    //So that I can find the movie I'm looking for

    it("Should type into the search bar and display the movies based on the search", () => {
        //cy.contains('Search')
        // cy.findByRole('input', {name: /nav-bar/}).type("Search Query");
        //cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName);
        // <input id="nav-bar" type="text" placeholder="enter search here"></input>
        cy.get('input').type('GodFather')

        cy.contains("title").should("not.contain", "Galaxy")
        
    })


    
    // it("contains a list of Images", () => {
    //     cy.get('div[class="img"]').find("img")
    // })
})
