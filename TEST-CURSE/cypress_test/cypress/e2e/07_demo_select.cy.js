import { formulario3 as frm3 } from './utils/formulario3_xpaths.js';
import {faker} from '@faker-js/faker';
import 'cypress-xpath';



describe("DEMO 7", ()=>{
    it("COMBO SELECT", ()=>{
        cy.visit(frm3.Url);
        cy.xpath(frm3.name).type("EL MIKE")
        cy.xpath(frm3.email).type()
        cy.wait(5000);
    });
})