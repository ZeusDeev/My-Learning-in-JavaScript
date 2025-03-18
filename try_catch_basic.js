// Manejo básico de errores

try {
    let resultado = 10 / 0 //Error matematico (divición por 0)
    console.log(resultado)
} catch (error) {
    console.log("Se produjo un error ", error.message)
}



//Try Catch con throw - Lanzando Errores Personalizados

function verificarEdad(edad) {
    if (edad < 18) {

        throw new Error("Debes ser mayor de edad")
    }

    return "Acceso concedido"
}


try {
    console.log(verificarEdad(16)) // Esto genera el error, puesto que la edad es menor a 18

} catch (error) {
    
    console.log("Error: ", error.message) //Captura nuestro error y muestra el resultado del mismo
}


// Try Catch con finally: Código que Siempre se Ejecuta

try {
    let x = 5
    let y = x.toUpperCase()

} catch (error) {
    console.log("Error: ", error.message)
}finally {
console.log("Este mensaje se mostrara siempre")
}