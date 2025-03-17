/* En JavaScript tenemos 5 clases de Scope, pero depende de la situación
   
     - Global Scope o Module Scope
     - Local Scope o Function Scope
     - Block Scope
*/

// Scope

//Global Scope - Cuando una variable no pertenece alguna funcion
var username = "Tzuzul"

function sayHi() {
    //Local Scope o Function Scope
    var username = "Code" //Variable local
    console.log(username)

    //Block Scope: Let y const, solamente, no podemos hacer uso de var.
    if(true) {
        let fullName = "Tzuzul Code"
        console.log(fullName)
    }

   // console.log(fullName) - Podemos observar que no es posible llamar a fullName, puesto que es una variable definida en un block scope
    



    // sayGoodBye()

    // function sayGoodBye() {
    //     console.log("Good Bye")
    // }
}

sayHi()


