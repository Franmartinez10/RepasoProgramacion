function ArrayPar(array) {
    var numeroPar = [];
    var i = 0;
    var booleano;
    while (i < array.length) {
        if (array[i] % 2 == 0) {
            booleano = true;
        }
        i++;
    }
    return booleano;
}
console.log("Hay un par: " + ArrayPar([23, 543, 564, 64, 11, 22]));
