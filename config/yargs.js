
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base para multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            describe: 'Muestra la tabla en consola',
            default : false
        },
        'h': {
            alias: 'hasta',
            type:'number',
            describe: 'Indica hasta que número se calcula la multiplicación',
            default:10
        }
    })
    .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
        throw 'El argumento "-b" debe ser númerico';
    }
    return true;
    })
.argv;


module.exports = argv;