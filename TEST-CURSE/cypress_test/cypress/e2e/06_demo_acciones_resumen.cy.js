
require('cypress-plugin-tab');
import  'cypress-xpath';

import { formulario2 } from './utils/formulario2_xpaths.js';


describe("DEMO 6", ()=>{
    it("ACCION: TYPE", ()=>{
        cy.visit( formulario2.url );
        cy.log("LOGIN CON EXITO!")
        cy.wait(5000);

    })
})