/*
1) Programa una función que cuente el número de caracteres de una cadena
   de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

// Metodo antiguo

function cuentaCarateres(cadena) {
    return cadena.length
}
console.log(cuentaCarateres("Hola Mundo"))

// metodo moderno

const contarCarateres = (cadena) => cadena.length
console.log(contarCarateres("Hola Mundo")) // 10
