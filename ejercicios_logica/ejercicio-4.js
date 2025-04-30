// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

// Metodo antiguo

function repetirTexto(cadena, num) {
    return cadena.repeat(num) // repeat repite el texto el numero de veces que le pasemos como argumento
}
console.log(repetirTexto("Hola mundo ", 3))

// Metodo moderno

const repetirTexto2 = (cadena, num) => cadena.repeat(num)
console.log(repetirTexto2("Hola mundo ", 3)) 

