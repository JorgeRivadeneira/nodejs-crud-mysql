const mySQL = require('mysql');
const credentials = require('./credentials');

console.log(credentials);
const conexion = mySQL.createConnection(credentials);

conexion.connect((error) => {
    if(error){
        console.error('Ha ocurrido un error: ' + error);
        return;
    }
    console.log('Conectado a la BDD MySQL');
});

module.exports = conexion;