


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

    }

    sonido() {
        console.log(`Hola soy un ${this.nombre} y hago un sonido`)
    }

    ladrar() {
        console.log("Wooff")
    }
}


class gato extends animal {
    
    constructor(nombre, genero, tamanio) {
        super(nombre, genero)
        this.tamanio = tamanio
        
    }

    sonido() {
        console.log(`Hola soy un ${this.nombre} y hago un sonido`)
    }

    maullido() {
        console.log("Miauu")
    }


}




const juanito = new perro("Juanito", "macho", "Mediano")
juanito.sonido()
juanito.ladrar()



const pedrito = new gato("Pedrito", "macho", "pequeñito")
pedrito.sonido()
pedrito.maullido()

