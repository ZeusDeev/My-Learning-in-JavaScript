
class Materias {
    constructor(ingles, programacion, html) {
        this.ingles = ingles,
        this.programacion = programacion,
        this.html = html
    }
}

class Alumno extends Materias {
    constructor(ingles, programacion, html, nombre, grado, edad){
        super(ingles, programacion, html)//Heredamos las materias

        this.nombre = nombre,
        this.grado = grado,
        this.edad = edad
    }

    notas() {
        console.log(`Nombre del Alumno: ${this.nombre}\n Grado: ${this.grado} \n `)
        console.log(`#### Notas ####\n Ingles: ${this.ingles}\n Programacion: ${this.programacion}\n HTML: ${this.html}\n `)
    }
   
    media() {
        let media = this.ingles + this.programacion + this.html / 3
        console.log(`Calificacion Media del alumno: ${media}`)
    }
}


const alumno = new Alumno(8, 10, 7, "Zeus", "5to semestre", 20)

alumno.notas()
alumno.media()
