//Sintaxis para un array
const arrayExample = [1, 2, 3] 

/* 
::::NOTA:::
puede ser valores distintos, como string, booleanos, etc.
Sin embargo lo recomendable no es escribir en un arrays distintos
tipos de datos.
*/

// Propiedad Length

const animales = ["Perro", "Canguro", "Pajaro", "Tiburon", "Tortuga"]

console.log(animales.length)

// Existen otras manera de las cuales podemos acceder

let animal1 = animales[0]
console.log(animal1)

// Podemos manipular un array, como añadir un valor al inicio o al final

animales.push("Gato") //Añade a nuestro array animales un nuevo valor al final
console.log(animales)

animales.unshift("Serpiente") //Añade un nuevo valor al inicio de array animales
console.log(animales)


// Para eliminar algun elemento de nuestro array, existe un metodo, pop()

animales.pop() // pop elimina el ultimo elemento de nuestro array
console.log(animales)

animales.shift()
console.log(animales) // Elimina el primer elemento de nuestro array

//Podemos iterar sobre length para ver lo que hay en nuestro array

for(i=0; i < animales.length; i++) {
    console.log(animales[i])
}



// Iteracion con foreach

animales.forEach((index) => {
    console.log(index)
})