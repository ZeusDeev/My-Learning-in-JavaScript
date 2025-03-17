// Closures

const greet = (fname) => {
    // Fuction Scope
    let greeting = "Welcome! " + fname // variable local


    let message = () => {
        // Fuction Scope
        console.log(greeting)
    }

    return message // Return de funciones
}

let sayHello = greet("Papatzul")
sayHello() // SayHello es una funcion que es la misma funcion que message