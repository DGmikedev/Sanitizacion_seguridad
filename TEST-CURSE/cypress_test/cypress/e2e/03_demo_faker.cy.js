require('cypress-plugin-tab');
import {faker} from '@faker-js/faker';
import 'cypress-xpath';


let vP = [800, 800]; // view port

let dominio_visit = "https://rodrigovillanueva.com.mx/form/demo-application";
let tm_await = 500;
let num_ins = 2;




 describe('DEMO 3', ()=>{
    it('DEMO FAKER', ()=>{
        let u_name = faker.person.fullName('male');
        let e_mail = faker.internet.email();
        let f_phone = faker.phone.number({ style: 'international' });

        cy.visit(dominio_visit);
        cy.viewport(vP[0], vP[1]);
        cy.title().should("eq", "Demo: Application | RodrigoVillanueva.com.mx");
        cy.xpath('//*[@id="edit-contact-name"]').type(u_name);
        cy.xpath('//*[@id="edit-contact-email"]').type(e_mail);
        cy.xpath('//*[@id="edit-contact-phone"]').type(f_phone);
        cy.log("==== PRUEBA UNITARIA DE INSERCIÓN DE DATOS VIA FAKER ===== ");

        for( let i = 0; i <= num_ins; i++ ){
        let fk_name = faker.person.fullName('male');
        let fk_email = faker.internet.email();
        let fk_phone = faker.phone.number({ style: 'international' });

        cy.visit(dominio_visit);
        cy.viewport(vP[0], vP[1]);
        cy.title().should("eq", "Demo: Application | RodrigoVillanueva.com.mx");
        cy.xpath('//*[@id="edit-contact-name"]').type(fk_name);
        cy.xpath('//*[@id="edit-contact-email"]').type(fk_email);
        cy.xpath('//*[@id="edit-contact-phone"]').type(fk_phone);
        cy.log(`==== PRUEBA UNITARIA MASIVA DE INSERCIÓN DE DATOS VIA FAKER ITERACIÓN:# ${i}=====`);
    }



    });

    


 })

 