const fs = require('fs');
//Ejercicio: muevo archivos de readJson.js a practicaTreadFile.txt les agrego la fecha y hora. 

//Me conecto al .Json 
const path1 = './inventors.json';
let datos1 = fs.readFileSync(path1, 'utf-8');
datos1 = JSON.parse(datos1);
console.log(datos1.inventors);
//Me conecto al .txt
const path2 = './practicaReadFile.txt';
let datos2 = fs.readFileSync(path2, 'utf-8');
//console.log(datos2);
//Leo el array y lo escribo en el  txt. 
datos1.inventors.forEach(element => {
    let cadena = (`${element.first.padEnd(13,' ')}${element.last.padEnd(14,' ')}${element.year}\n`);
    datos2 += cadena;
   
});
//console.log(datos2);
//Guardo en el archivo txt.
fs.writeFileSync(path2, datos2);
console.log('OK');





//const path = './practicaReadFile.txt';
//let datos = fs.readFileSync(path, 'utf-8');

//console.log(datos);

//fs.writeFileSync(path, datos);
//console.log('OK');