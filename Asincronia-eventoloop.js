// Codigo Sincrono Bloqueante

/*

Un codigo sincrono permite que el codigo se ejecute dependiendo la tarea en orden 
en como es asignada, es decir primero la funcion uno() llamada se añade anuestro call stcak
 y permanece, despues se añade lo que hay dentro de la funcion que es el console.log("uno")
 despues la funcion dos e imprime lo de adentro y despues se va (tomando en cuenta el termino de pilas
 ultimo en llegar primero en salir) despues finaliza con con fin

*/
// Call Stack - esta funcion se añade a nuestro call stack para hacer las operaciones
(() => {
    console.log("Codigo Sincrono")
    console.log("Inicio")


    function dos() {
        console.log("Dos")
    }

    function uno() { 
        console.log("Uno")
        dos()
        console.log("Tres")
    }


    uno()
    console.log("Fin")


})();


/* De lo contrario, en un codigo Asincrono, las peticiones por solicitud, son clave
primero se ejecuta lo que este en la lista de tareas o call stack, se añade a la pila
si este como es asincrono se espera la solicitud, sigue el programa su curso y al final se cumplen las
solicitudes, este paso en lugar de ser pilas las solicitudes forman parte
del termino filas, primero en llegar primero en salir */

// Codigo Asincrono No Bloqueante
console.log("************");

(() => {
    console.log("Codigo Asincrono")
    console.log("Inicio")

    function dos() {
        setTimeout(() => {
            console.log("Dos")
        }, 1000)

    }

    function uno() {
        setTimeout(() => {
            console.log("Uno")
        }, 0)
        dos()
        console.log("Tres")
    }

    uno()
    console.log("Fin")

})();
