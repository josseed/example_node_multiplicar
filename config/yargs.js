const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'show in console the table of multiply', opts)
    .command('crear', 'show in console the table of multiply', opts)
    .help()
    .argv;



module.exports = {
    argv
}