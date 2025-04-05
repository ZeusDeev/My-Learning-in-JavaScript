const arrayDeObjetos = [
    {
        nombre: "Zeus",
        edad: 21,
        ocupacion: "Software Enginner"
    },

    {
        nombre: "Maria",
        edad: 25,
        ocupacion: "Data Enginner"
    },

    {
        nombre: "Macario",
        edad: 28,
        ocupacion: "IA Enginner"
    },

    {
        nombre: "Juan",
        edad: 25,
        ocupacion: "Data Analytics"  
    }
]


for(let i=0; i < arrayDeObjetos.length; i++) {

    console.log(`Nombre: ${arrayDeObjetos[i].nombre}`)
    console.log(`Edad: ${arrayDeObjetos[i].edad}`)
    console.log(`Ocupacion: ${arrayDeObjetos[i].ocupacion}\n`)

}



const objetoConArray =  {
    nombre : "Objeto con array",
    arr : ["Manzanas","Galletas","Jugos","Sabritas"]
}

objetoConArray.arr.forEach( elemento => {
    console.log(`Producto: ${elemento} en existencia`)
})