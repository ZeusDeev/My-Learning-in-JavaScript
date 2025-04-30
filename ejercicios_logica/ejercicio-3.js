/**
    3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */


// Metodo antiguo

function separarTexto(cadena, separador) {

    return cadena.split(separador) // split separa el texto en un array, dependiendo del separador que le pasemos como argumento(el espacio en este caso)
}
console.log(separarTexto("Hola que tal", " "))

// Metodo moderno

const separarTexto2 = (cadena, separador) => cadena.split(separador)
console.log(separarTexto2("Hola que tal", " "))

