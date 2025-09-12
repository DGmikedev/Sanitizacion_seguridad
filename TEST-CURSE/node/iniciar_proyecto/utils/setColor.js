const pc = require('picocolors')

const yellow = (data) => pc.yellow(data)
const blue = (data) => pc.blueBright(data)
const red = (data) => pc.red(data)
const green = (data) => pc.green(data)

const bggreen = (data) => pc.bgGreen(data)
const bgred = (data) => pc.bgRed(data)

module.exports = {
  yellow,
  blue,
  red,
  green,
  bggreen,
  bgred
}
