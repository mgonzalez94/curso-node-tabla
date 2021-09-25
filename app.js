const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//const producto = 10;
console.clear();

//#Almacenamos lo que recibamos por argumento.
/* const [,, arg3 = 'base=5'] = process.argv;
const [, producto ] = arg3.split('='); */

//console.log(process.argv);
/* console.log(argv);
console.log(); */

// console.log(producto);

 crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.magenta, 'creado'.bgMagenta))
    .catch(err => console.log(err));  