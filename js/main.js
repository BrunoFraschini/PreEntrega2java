/*Variables */

let fase=1

let opcion={}

const textos=["Tomaste la llave.","Dejaste la llave."]


/*Funcion para definir que respuesta dar al usuario*/ 
function textosDeFases() {
    if (fase==1) {
        while(textos.length > 0) {
            textos.pop()
        };
        textos.push("Tomaste la llave.");
        textos.push("Dejaste la llave.");
    } else if (fase==2) {
        while(textos.length > 0) {
            textos.pop()
        };
        textos.push("Cruzaste la puerta izquierda.");
        textos.push("Cruzaste la puerta del medio.");
        textos.push("Cruzaste la puerta derecha.")

    }   else if (fase==3) {
            while(textos.length > 0) {
                textos.pop()
            };
            textos.push("Escapaste del castillo.");
            textos.push("Esta puerta está cerrada con llave.");
            textos.push("El guardia en la sala te ve intentando escapar y te devuelve a tu habitación.")
    }
}

/*Funcion para resetear el juego al inicio */
function comienzoJuego() {

    console.log("Despiertas en la habitación de un castillo y hay una llave a tu derecha. Opciones: Tomar llave(1), Dejar llave(2)");
    fase = 1

}
/*Selector de opciones */
function opciones() {
    opcion = prompt("Elige una opcion.");
    if (opcion == 1) {
        console.log(textos[0]);
    } else if (opcion == 2){
        console.log(textos[1])
    } else if (opcion == 3) {
        console.log(textos[2])
    };
    fase = fase+1 
}
/*Loop para caminos sin salida */
function faseTres() {
    while (opcion < 3) {

        if (opcion == 1) {
            console.log("Llegaste a un baño. Vuelve a la habitación.");
            fase = 2
            console.log("Tienes tres puertas en tu habitacion. Opciones: Izquierda(1), Medio(2), Derecha(3)");
            textosDeFases();
            opciones();
        } else if (opcion == 2) {
            console.log("Caíste al vacío desde la cima de la torre. Vuelve a comenzar.")
                    comienzoJuego();
                    textosDeFases();
                    opciones();
                    console.log("Tienes tres puertas en tu habitacion. Opciones: Izquierda(1), Medio(2), Derecha(3)");
                    textosDeFases();
                    opciones()
        }       
    }  
}
/*Aqui comienza el juego */


comienzoJuego();

textosDeFases()

opciones()



console.log("Tienes tres puertas en tu habitacion. Opciones: Izquierda(1), Medio(2), Derecha(3).")

textosDeFases()

opciones()


faseTres() 
       
console.log("Te encuentras otras tres puertas en el pasillo. Opciones: Izquierda(1), Medio(2), Derechea(3).");
textosDeFases();
opciones();

while (opcion > 1) {
    if (opcion == 2){
        console.log("Vuelve a buscar la llave.");
        comienzoJuego();
        textosDeFases();
        opciones();
        console.log("Tienes tres puertas en tu habitacion. Opciones: Izquierda(1), Medio(2), Derecha(3).");
        textosDeFases();
        opciones();
        faseTres();
        console.log("Te encuentras otras tres puertas en el pasillo. Opciones: Izquierda(1), Medio(2), Derechea(3).");
        textosDeFases();
        opciones();
    } else if (opcion == 3) {
        console.log("Vuelve a comenzar.");
        comienzoJuego();
        textosDeFases();
        opciones();
        console.log("Tienes tres puertas en tu habitacion. Opciones: Izquierda(1), Medio(2), Derecha(3).");
        textosDeFases();
        opciones();
        faseTres();
        console.log("Te encuentras otras tres puertas en el pasillo. Opciones: Izquierda(1), Medio(2), Derechea(3).");
        textosDeFases();
        opciones();
    }
}