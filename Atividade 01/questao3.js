var numeroSaber = 54;
var numeroFibonacci = 0;
var proximoNumero = 0;
var numeroAnterior = 1;
while (numeroFibonacci < numeroSaber) {
    proximoNumero = numeroFibonacci + numeroAnterior;
    numeroAnterior = numeroFibonacci;
    numeroFibonacci = proximoNumero;
}
if (numeroFibonacci == numeroSaber) {
    console.log('O número ' + numeroSaber + ' está na lista de Fibonacci.');
}
else {
    console.log('O número ' + numeroSaber + ' não está na lista de Fibonacci.');
}
