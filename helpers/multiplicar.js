const fs = require('fs');
const colors = require('colors');
/**
 * Método para crear un archivo con la tabla de multiplicar con la base
 * proporcionada.
 * @param {Base multiplica} base 
 * @param {listar} listar
 */
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try
        {

        let salida = '';

        for (let i=1; i<=hasta; i++) {
            //console.log(`${base} x ${i} = ${base * i}`);
            salida += `${(base)} x ${i} = ${base * i} \n`;
        }
        if (listar) {
            console.log('========================================='.rainbow);
            console.log(colors.zebra('                  TABLA DEL ') + colors.green(base) + colors.zebra('           '));
            console.log('=========================================' .rainbow);
            console.log(salida);
        }
        //#Escribimos el archivo.
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida, (err) => {
            if(err) throw err;
            console.log(colors.inverse(`tabla del ${base} creado`));
        });

        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}