/*
🔹 Desafío:

    Crea una función que reciba dos números y devuelva su división.

    Maneja los siguientes errores:
      🔹Si algún parámetro no es un número, lanza un error "Debes ingresar solo números".
      🔹Si el divisor es 0, lanza un error "No puedes dividir entre 0".
      🔹Usa finally para mostrar "Fin del programa."
*/


function divición(a, b) {
    
    let num1 = Number(a)
    let num2 = Number(b)

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        throw new Error("Debes ingresar solo números! ")

    } else if (num2 === 0) {
        throw new Error("No puedes dividir entre cero!")
    }

    return num1 / num2
    

}

try {
    let resultado = divición(5, 0)
    console.log(resultado)

} catch (error) {
    console.log("Error: ", error.message)

} finally {
    console.log("Fin del programa...")
    
}