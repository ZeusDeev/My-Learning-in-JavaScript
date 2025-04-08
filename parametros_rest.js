// parametro rest

const nombres = ["Pedro","Juan","Zeus"]

const nuevosNombres = [...nombres, "Carlos","Esteban"]

console.log(nuevosNombres)


// Parametro Operator
function suma(a,b,...c) {

    let resultado = a + b

    c.forEach((numero) => {
        resultado += numero
    })

    return resultado
}

console.log(suma(1,2))
console.log(suma(1,2,4,5))