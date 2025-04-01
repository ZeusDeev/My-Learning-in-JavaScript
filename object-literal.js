// Objetos literales

const persona = {
    nombre: "Zeus",
    apellido: "Cach",
    edad: 21,
    saludar: () => {
        console.log(`Hola soy ${persona.nombre}`)
    }
}


console.log(persona.nombre)
persona.saludar()