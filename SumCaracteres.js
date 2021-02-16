"use strict";
exports.__esModule = true;
exports.sumCaracteres = void 0;
function sumCaracteres(array) {
    var sumNumer = 0;
    for (var i = 0; i < array.length; i++) {
        sumNumer += array[i].length;
    }
    return sumNumer;
}
exports.sumCaracteres = sumCaracteres;
//console.log(sumCaracteres(["esos","locos","años"]))
