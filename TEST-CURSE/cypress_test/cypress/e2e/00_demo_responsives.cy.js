
require('cypress-plugin-tab');
import 'cypress-xpath';
import { formulario } from './utils/formulario1_xpaths.js';
import { rsltns, url_form_contacto } from './utils/data_site.js'

// Se traen las resoluciones de todos los posibles objetivos
// - rsltns - es un objeto con todas las resoluciones 
// Se recorre objeto con un for como motor principal
// se visita el sitio y se aj
// usta el view port por cada resolucion
/*
export const rsltns = {
    office1 : [1920, 1080], movil1 : [360,800],  tablet1 : [768, 1024],
    office2 : [1536, 864],  movil2 : [390, 844], tablet2 : [810, 1080],
    office3 : [1366,768],   movil3 : [393, 873], tablet3 : [820, 1180]
}*/

let time_wait_to_check = 5000;  //  tiempo de espera por cada pantalla

describe("DEMO 0", ()=>{
    it("CHECK RESPONSIVE", ()=>{
        for(const property in rsltns ){
            cy.log(` ${rsltns[property][0]} , ${rsltns[property][0]} #####`);
            cy.visit(url_form_contacto);
            cy.viewport(rsltns[property][0] , rsltns[property][0]);
            cy.wait(time_wait_to_check);
        }
    })
});