describe('TEST LOG', ()=>{


    // VIEWPORT SIZE
    let vp = [800,800];

    const URL_LOGIN = 'https://www.saucedemo.com/v1/';

    it('Login incorrecto', ()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.viewport(vp[0], vp[1])
        cy.title().should("eq", "Swag Labs")
        cy.get("#user-name").type("Mike")
        cy.get("#password").type("mike123")
        cy.get("#login-button").click()
        cy.wait(5000)
        cy.get('h3[data-test="error"]').should("contain.text", "Epic sadface: Username and password do not match any user in this service")
    })

    it('Login correcto', ()=>{
        cy.visit(URL_LOGIN)
        cy.viewport(vp[0], vp[1])
        cy.title().should("eq","Swag Labs")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.wait(3000)
        cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html")
        // cy.get('h3[data-test="error"]').should("contain.text", "Epic sadface: Username and password do not match any user in this service")
    })
})