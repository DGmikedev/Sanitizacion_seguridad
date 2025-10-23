
require('cypress-plugin-tab');
import  'cypress-xpath';

import { formulario2 } from './utils/formulario2_xpaths.js';
import { faker } from '@faker-js/faker';

let time_wait = 500;

function scroll(x, y, t){
    cy.window().then((win) =>{
        win.scrollBy(x, y);
        cy.wait(t);
    })
}    

describe("DEMO 6", ()=>{
    it("ACCION: TYPE", ()=>{

        let name = faker.person.fullName();

        cy.visit( formulario2.url );
        scroll(0, -100, 200);
        cy.xpath(formulario2.Name).should("be.visible");
        cy.wait(time_wait);
        cy.xpath(formulario2.Name).type(name);
        cy.wait(time_wait);
        cy.xpath(formulario2.Name).should("have.value",name);
        cy.wait(time_wait);
        cy.xpath(formulario2.Password ).type("secret pasword");
        cy.wait(time_wait);

        cy.xpath(formulario2.Milk).click();
        cy.wait(time_wait);
        cy.xpath(formulario2.Water).click();
        cy.wait(time_wait);
        cy.xpath(formulario2.Coffee).click();
        cy.wait(time_wait);
        cy.xpath(formulario2.Green).click();
        cy.wait(time_wait);
        cy.xpath(formulario2.like_automation).click('Yes');
        cy.wait(5000);
    })
})