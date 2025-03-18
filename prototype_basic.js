// Prototypes Basic in JavaScript

/*
Los prototipos en javaScript nos permiten ahorrar memoria al momento de su ejecucion,
es decir, cuando creamos una funcion constructura, y guardamos en esa misma funcion un método,
este se duplica en cada instancia; de lo contrario cuando hacemos uso de lso prototipos
permite que cada instancia comparta el mismo método, haciendo mas optima nuestra ejecución de código

*/

//Definimos una funcion constructora

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

// Agregamos un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
}


const person1 = new Persona("Zeus", 21)
const person2 = new Persona("Emmanuel", 22)

person1.saludar()
person2.saludar()