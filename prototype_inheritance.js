// Herencia prototipica

// Creamos nuestra funcion constructora Vehiculo
function Vehiculo(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}


// Agregamos un método al prototipo de Vehiculo
Vehiculo.prototype.obtenerInfo = function() {
    return `Marca: ${this.marca}, Modelo:${this.modelo}`
}

// Función constructora que hereda de Vehiculo
function Auto(marca, modelo, puertas) {
    Vehiculo.call(this, marca, modelo) //Llamamos al constructor padre
    this.puertas = puertas
}


// Hacemos que auto herede de vehiculo
Auto.prototype = Object.create(Vehiculo.prototype) //Auto hereda todo metodo de vehiculo
Auto.prototype.constructor = Auto //Corrección para que el constructor de Auto siga siendo Auto

Auto.prototype.obtenerPuertas = function() {
    return `Este auto tiene ${this.puertas} puertas` 
}

const miAuto = new Auto("Toyota","Corolla", 4)
console.log(miAuto.obtenerInfo())
console.log(miAuto.obtenerPuertas())

