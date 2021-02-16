function arcoiris(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].includes("rojo")) {
            console.log("El color rojo está incluido");
        }
        if (array[i].includes("naranja")) {
            console.log("El color naranja está en el arcoiris");
        }
        if (array[i].includes("amarillo")) {
            console.log("El color amarillo está en el arcoiris");
        }
        if (array[i].includes("verde")) {
            console.log("El color verde está en el arcoiris");
        }
        if (array[i].includes("azul")) {
            console.log("El color azul está en el arcoiris");
        }
        if (array[i].includes("indigo")) {
            console.log("El color indigo está en el arcoiris");
        }
        if (array[i].includes("violeta")) {
            console.log("El color violeta está en el arcoiris");
        }
        if (array[i] != "rojo" && array[i] != "naranja" && array[i] != "amarillo" && array[i] != "verde" && array[i] != "azul" && array[i] != "indigo" && array[i] != "violeta") {
            console.log("El color " + array[i] + " no está en el arcoiris");
        }
    }
}
var arcoirisito = ["rojo", "verde", "amarillo", "azul", "amarillo chillon"];
arcoiris(arcoirisito);
