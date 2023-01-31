const fs = require("fs");
const colors =  require('colors');
const crearArchivo = async (base = 7, listar = false, tope = 10) => {
  try {
   
    let salida = "";

    for (let i = 1; i <= tope; i++) {
      producto = base * i;
      salida = salida + `${base} x ${i} = ${producto}\n`;
    }

    if(listar){
      console.log("===================".green);
      console.log('Tabla del:'.bgBlue, `${base}`);
      console.log("===================".green);
      console.log(salida);
    }
    
    nombre_archivo = `./salida/tabla-${base}.txt`;

    // Forma inicial con el writeFile
    /*fs.writeFile(nombre_archivo, salida, (err) => {
      if (err) throw err;
      mensaje = `tabla-${base}.txt creada`;
      console.log(mensaje);
    });*/

    // Si hay un error se debe atra[ar mediante un try y un catch]
    fs.writeFileSync(nombre_archivo, salida);
    mensaje = `tabla-${base}.txt creada`;
    return mensaje;
  } catch (error) {
    throw error
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
