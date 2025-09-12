// libreria para manejo de entrada de datos por consola
const handlerln = require('node:readline')

// uso de colores
const { yellow, blue, red, green, bggreen, bgred } = require('./utils/setColor.js')

const liner = handlerln.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.clear()
console.log(yellow('==== Inicio de la aplicación ===='))
console.log(blue('==== Inicio de la aplicación ===='))
console.log(red('==== Inicio de la aplicación ===='))
console.log(green('==== Inicio de la aplicación ===='))
console.log(bggreen('==== Inicio de la aplicación ===='))
console.log(bgred('==== Inicio de la aplicación ===='))
console.log('==== Inicio de la aplicación ====')

const menu = 'opcion 1\nopcion 2\nopcion 3'
console.log(yellow(menu))
liner.on('line', (data) => {
  console.clear()

  console.log(yellow(menu))

  data === '3'
    ? liner.close()

    : console.log(`opcion seleccionada: "[${data}]"`)
})
