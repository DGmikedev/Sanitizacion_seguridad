// plugins necesarios para corrrer esta prueba
//npm install -D cypress-xpath
//npm install -D cypress-plugin-tab

require('cypress-plugin-tab')
import 'cypress-xpath';


// VIEWPORT SIZE
let vp = [1800,800];

// WAIT TIME
let time = 10

describe("Demo 2 ", ()=>{
    it("Rellenar un formulario", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application");
        cy.viewport(vp[0], vp[1]);
        cy.title().should("eq", "Demo: Application | RodrigoVillanueva.com.mx");
        cy.xpath('//*[@id="edit-contact-name"]').type("EL MIKE", {delay:time});
        cy.xpath('//*[@id="edit-contact-email"]').type("el.mike@email.com.mx", {delay:time});
        cy.xpath('//*[@id="edit-contact-phone"]').type("1593571230", {delay:time})       
        cy.xpath('//*[@id="edit-contact-address"]')
            .type("Direccion 1", {delay:time})
            .type("{backspace}")
            .type("777")
            .type("{del}")
        cy.xpath('//*[@id="edit-contact-address-2"]').type("Calle falsa 123 Av. siempre viva");
        cy.xpath('//*[@id="edit-contact-city"]').type("159123", {delay:time});
        cy.wait(time);
        cy.xpath('//*[@id="edit-contact-state-province"]').select("Colorado", {delay:time});
        cy.xpath('//*[@id="edit-contact-postal-code"]').type("000005", {delay:time});
        cy.xpath('//*[@id="edit-contact-country"]').select("Greece", {delay:time});
        cy.xpath('//*[@id="edit-resume-method-attach"]').click();
        cy.wait(time * 10);
        cy.xpath('//*[@id="edit-resume-text"]').should("not.be.visible");
        cy.xpath('//*[@id="edit-resume-method-paste"]').click();
        // cy.wait(time * 10);
        cy.wait(time);
        cy.xpath('//*[@id="edit-resume-text"]').type("lorem ipsum dolor aest meaest");
        cy.xpath('//*[@id="edit-submit"]').click();
        cy.wait(time);
        cy.url().should("include", "https://rodrigovillanueva.com.mx/form/demo-application/confirmation");
    })
})
