/*
  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
*/

// Metodo antiguo
function recortaTexto(cadena, num) {
     return cadena.slice(0, num) // slice recorta el texto desde el primer argumento hasta el segundo argumento(num)
}

console.log(recortaTexto("Hola mundo", 4))

// Metodo Moderno

const recortarTexto = (cadena, num) => cadena.slice(0, num)
console.log(recortarTexto("Hola mundo", 4))