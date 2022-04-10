var listaNumbers = [1, 2, 3, 4, 5, 6];
var media = 0;
var soma = 0;
for (var _i = 0, listaNumbers_1 = listaNumbers; _i < listaNumbers_1.length; _i++) {
    var listaNumber = listaNumbers_1[_i];
    soma = soma + listaNumber;
}
media = soma / listaNumbers.length;
for (var _a = 0, listaNumbers_2 = listaNumbers; _a < listaNumbers_2.length; _a++) {
    var listaNumber = listaNumbers_2[_a];
    if (listaNumber >= media) {
        console.log(listaNumber);
    }
}
