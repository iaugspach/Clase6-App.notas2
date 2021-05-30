// requiero modulo nativo
const fs = require ('fs')
// defino un objeto literal
// el fs lee archivos

let operacionesArchivos = {
    archivo: 'tareas.json',
    // parse sirve para convertir un archivo de JSON a js
    leerArchivoJson: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    grabarUnJson: function (tareas) {
        return  fs.writeFileSync(this.archivo, tareas)
    },
}

module.exports = operacionesArchivos;