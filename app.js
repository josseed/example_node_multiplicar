/*
 *
 */
//requireds

// const fs = require('./asdas'); propio
const { argv } = require('./config/yargs');

const colors = require('colors');

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        console.log(`rainbow`.rainbow)
        ListarTabla(argv.base, argv.limite)
            .then(data => console.log(`lista:\n ${data}`.trap))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.purple))
            .catch(e => console.log(e));
        break;

    default:
        console.log("comando no reconocido".red);
        break;

}


/*
crearArchivo(base)
    .then(archivo => console.log(`archivo creado ${archivo}`))
    .catch(e => console.log(e));
    */