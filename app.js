const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors =  require('colors');

console.clear();

console.log("base: yargs", argv.base);

/*console.log(process.argv)
const [,,arg3 = 'base=7'] = process.argv;
const [, base] = arg3.split('=')
console.log(base)*/
// const base = 12;

crearArchivo(argv.b, argv.l, argv.t)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
