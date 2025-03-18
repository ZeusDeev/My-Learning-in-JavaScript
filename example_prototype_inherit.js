//Ejemplo 2 del uso de herencia prototipica

//Creamos una funcion constructora Animal
function Animal(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

// Metodo en el prototipo animal
Animal.prototype.sonido = function() {
    console.log(`${this.nombre}, hace un sonido`)
}

// Función construtora que hereda del prototipo Animal - Heredamos propiedades de animal, peor jamás métodos
function Perro(nombre, edad, raza) {
    Animal.call(this, nombre, edad) // Llamamos al constructor de Animal (herencia)
    this.raza = raza
}

// Heredamos los métodos de Animal
Perro.prototype = Object.create(Animal.prototype) 
Perro.prototype.constructor = Perro


// Añadimos un método propio de Perro al prototipo perro
Perro.prototype.sonido = function() {
    console.log(`El ${this.nombre}, hace Woof`)
}

// Creación de instancias
const animal = new Animal("Martin", 20)
const miMascota = new Perro("Julian", 21, "Criollo")

// Probamos los métodos
animal.sonido()
miMascota.sonido()
