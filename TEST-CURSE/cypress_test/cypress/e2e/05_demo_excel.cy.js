require('cypress-plugin-tab');
import "cypress-xpath";

import { faker } from '@faker-js/faker';

// instalación del lector de xlsx
// npm install xlsx
const XLSX = require('xlsx');

// CAMPOS DEL FORMULARIO DE CONTACTO //
import { formulario } from './utils/formulario1_xpaths';

// TRAE UTILIDADESD PARA PRUEBAS  // 
// .- EXCEL CON DATOS DE USUARIOS
// .- RESOLUCIONES DEL VIEWPORT
import { path_excel_usuarios, rsltns, url_form_contacto } from './utils/data_site.js';

const tiempo_espera = 2000; // 2seg 
const vP0 = rsltns.tablet1[0];
const vP1 = rsltns.tablet1[1];

describe("DEMO 5", ()=>{
    it("LEER EXCEL", ()=>{
        cy.log(vP0, vP1)
        cy.visit(url_form_contacto);
        cy.viewport(vP0, vP1);
        cy.wait(tiempo_espera);
        cy.readFile(path_excel_usuarios) // se lee el archivo excel
        .then( (fileContent) => {
            const workbook = XLSX.read( fileContent, { type: 'binary'}); // lectura de tipo binario
            const sheetName = workbook.SheetNames[0];                     // Nombre de la primera hoja
            const sheet = workbook.Sheets[sheetName];                    // se ajusta el sheet con el nombre obtenido
            const data = XLSX.utils.sheet_to_json(sheet, {header:1})     // leer desde la columna 1

            // lectura de las filas del excel
            // omite la primera fila por que ahí estan los titulos de las columnas
            const dataRows = data.slice(1);
            
            for( let i = 0; i < dataRows.length; i++){

                const row = dataRows[i];

                const excel_name  = row[0] ? row[0].toString() : '';
                const excel_email = row[1] ? row[1].toString() : '';
                const excel_movil = row[2] ? row[2].toString() : '';

                cy.xpath(formulario.Name).clear().type(excel_name);
                cy.xpath(formulario.Email).clear().type(excel_email);
                cy.xpath(formulario.Phone).clear().type(excel_movil, {delay:1});

            }


        })
        

    })
})