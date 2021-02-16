function nombresInclude(array) {
    var booleano = true;
    var i = 0;
    while ((i < array.length) && booleano == true) {
        if (array[i][0] === "m") {
            booleano = true;
        }
        else {
            booleano = false;
        }
        i++;
    }
    return booleano;
}
console.log(nombresInclude(["mJuanma", "mTorresm", "martin"]));
