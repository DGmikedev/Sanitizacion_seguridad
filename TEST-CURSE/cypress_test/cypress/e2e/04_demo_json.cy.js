require('cypress-plugin-tab');
import 'cypress-xpath';
import { formulario } from './utils/formulario1_xpaths.js';

let vP = [800, 800]; // view port

let dominio_visit = "https://rodrigovillanueva.com.mx/form/demo-application";
let tm_await = 500;
let num_ins = 2;


describe("DEMO 4", ()=>{
    it("DATA JSON", ()=>{
       
        
        // manupiular el scroll de la  ventana
        cy.window().then((win) =>{
            win.scrollBy(0, -500)
        });
        
        cy.wait(2000);

        // se leerá el json y se haran acciones por cada conjunto de datos
        // data será el conjunto total de datos
        // row es el conjunto individual de datos de cada usuario
        cy.fixture('./utils_fixtures/json_data.json').then((data)=>{
            data.forEach( row => {
                cy.visit(dominio_visit);
                cy.viewport(vP[0], vP[1]);
                cy.title().should('eq', 'Demo: Application | RodrigoVillanueva.com.mx');

                let jsn_name  = row.name;
                let jsn_email = row.email;
                let jsn_phone = row.phone;

                cy.xpath(formulario.Name).type(jsn_name);
                cy.xpath(formulario.Email).type(jsn_email);
                cy.xpath(formulario.Phone).type(jsn_phone);

                // manupiular el scroll de la  ventana
                cy.window().then((win) =>{
                    win.scrollBy(0, -500);
                });

                cy.wait(2000);

            });
        })
    })
})