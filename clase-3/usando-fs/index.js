const fs = require("fs");
const fsp = fs.promises; // usamos el modulo de promesas para asegurarnos que todos os metodos se corren de manera asincrona

(async () => {
  try {
    await fsp.writeFile("./file1.json", `{"hello": "worldsss"}`, (error) => {
      // definimos un handler de error para ejecutar una accion dada en caso de que ocurra un error en la operacion
      if (error) throw new Error(error);
    });

    // await fsp.appendFile(
    //   './file1.json', '\r\nHello world.'
    // );

    // al leer un archivo debemos indicar el tipo de encoder que vamos a usar, un encoder sirve para representar caracteres en un texto, siendo utf8 el tipo de encoder por defecto y el mas usado para representar caracteres en texto, otros encoders pudiesen fallar al representar caracteres como acentos o Ñ en texto plano
    const fileBuffer = await fsp.readFile("./file1.json", "utf8", (error) => {
      if (error) throw `error: error de lectura, ${error.toString()}`;
    });
    // En caso de tener un string que represente un json, podemos usar el metodo JSON.parse para convertirlo en un objeto javascript valido y operar con sus propiedades
    console.dir(JSON.parse(fileBuffer));
  } catch (error) {
    // el bloque catch sirve para atajar cualquier error y mostrarlo en la consola
    console.log(error);
  }
})();
