// Crea un objeto, impreme algunos valores de manera tradicional, despues extrae los datos y muestralo, usa lo que sabes hasta ahora

// Añade una funcion que diga "${nombre} se dedica a (ocupacion) con codigo js

const persona = {
    nombre: "Zeus",
    edad: 21,
    ocupacion: "Estudiante, Desarrollador",
    datos: () => { // Funcion del objeto
        console.log(` su ocupacion de ${persona.nombre} es ${persona.ocupacion} `)
    }
}



console.log(persona.nombre)// Accedemos a nuestra propiedad nombre del objeto
persona.datos() // Imprimimos nuestra funcion en el objeto

persona.nombre = "Emmanuel" // Modifica nuestro valor en el objeto

const {nombre, edad, ocupacion} = persona // destructuracion del objeto
console.log(nombre, edad, ocupacion)

