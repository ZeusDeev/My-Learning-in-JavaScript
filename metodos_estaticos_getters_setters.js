// Métodos estáticos, getters y setters

class animal{

    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }

}


class perro extends animal {

    constructor(nombre, genero, tamanio){
        // Con el metodo super se manda a llamar el constructor de la clase principal
        super(nombre, genero)
        this.tamanio = tamanio
        this.raza = null

    }

    // Un metodo estatico es una funcion que pertenece a la clase, no a la instancia de la clase, es decir que se puede ejecutar sin crear una instancia
    static sonido() {
        console.log(`Hola soy un perro y hago un sonido`)
    }

    ladrar() {
        console.log("Wooff")
    }

// Getter: permite acceder a la propiedad 'raza' como si fuera una propiedad normal
    get getRaza() {
        return this.raza
    }
    
// Setter: permite modificar la propiedad 'raza' y podrías agregar validaciones aquí si quisieras
    set setRaza(raza){
        this.raza = raza
    }
}


class gato extends animal {
    
    constructor(nombre, genero, tamanio) {
        super(nombre, genero)
        this.tamanio = tamanio
        
    }

    sonido() {
        console.log(`Hola soy ${this.nombre} un  gatito y hago un sonido`)
    }

    maullido() {
        console.log("Miauu")
    }


}




const juanito = new perro("Juanito", "macho", "Mediano")

// llamada de un metodo estatico
perro.sonido()

// Metodo apartir de una instancia
juanito.ladrar()

// getter
console.log(juanito.getRaza)

// setter

console.log(juanito.setRaza = "Gran danes")



const pedrito = new gato("Pedrito", "macho", "pequeñito")
pedrito.sonido()
pedrito.maullido()

