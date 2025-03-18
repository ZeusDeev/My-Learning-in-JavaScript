// Creamos una funcion constructora Animal

function Animal(nombre, edad) { // funcion constructora padre
    this.nombre = nombre
    this.edad = edad
}

// Metodo del prototipo animal

Animal.prototype.hacerSonido = function () {
    console.log(`El animal ${this.nombre} hace un sonido`)
}

// Heredacion de la clase padre - Gato hereda las propiedades de animal, pero no sus metodos
function Gato(nombre, edad, sonido) {
    Animal.call(this, nombre, edad) //heredamos de Animal
    this.sonido = sonido
}

Gato.prototype = Object.create(Animal.prototype)
Gato.prototype.constructor = Gato


Gato.prototype.hacerSonido = function() {
    console.log(`El ${this.nombre}, hace ${this.sonido}`)
}

// metodo para el animal perro

function Perro(nombre, edad, sonido) {
    Animal.call(this, nombre, edad)
    this.sonido = sonido
}


Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro

Perro.prototype.hacerSonido = function() {
    console.log(`El ${this.nombre}, hace  ${this.sonido}`)
}

// Creacion de las instancias

const miAnimal = new Animal("Macario", 3)
const miGato = new Gato("Copito", 8, "Woof")
const miPerro = new Perro("Colega", 5, "Miau")


// Uso de los metodos

miAnimal.hacerSonido()
miGato.hacerSonido()
miPerro.hacerSonido()

