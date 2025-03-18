/*
✅ Ejercicio 1: Captura un error de variable no definida
Escribe un código donde intentes acceder a una variable no declarada
dentro de try, y maneja el error con catch.

*/

const saludar = () => {
    let mensaje = "Hola Mundoo"
}

try {
    console.log(mensaje)
} catch (error) {
    console.log("Error: ", error.message)
}

/*
✅ Ejercicio 2: Lanza un error si el usuario ingresa una cadena vacía
Crea una función que reciba un nombre y lance un error si el usuario no 
ingresa nada.
*/

const Persona = (nombre) => {
    if (nombre === '') {
        throw new Error("Debes ingresar un valor, no dejes vacío el apartado!");
    }

    console.log(`Hola, mi nombre es ${nombre}`);

}

try {
    Persona('')
} catch (error) {
    console.log("Error: ", error.message)
}


/*
✅ Ejercicio 3: Prueba con finally
Haz un programa que intente dividir dos números, maneje el error si
el divisor es 0 y siempre muestre un mensaje final con finally.
*/

try {
    let num1 = 3
    let num2 = 0

    if(num2 === 0){
        throw new Error("No puedes dividir en cero!")
    }

    let resultado = num1/num2
    console.log(resultado)

} catch (error) {
    console.log("Error: ", error.message)
} finally {
    console.log("Esto siempre se ejecutara")
}