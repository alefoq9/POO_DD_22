let numeroSaber = 55

let numeroFibonacci = 0
let proximoNumero = 0
let numeroAnterior = 1

while (numeroFibonacci < numeroSaber){
        proximoNumero = numeroFibonacci + numeroAnterior
        numeroAnterior = numeroFibonacci
        numeroFibonacci = proximoNumero
    }

if (numeroFibonacci == numeroSaber){
    console.log('O número '+numeroSaber+' está na lista de Fibonacci.');
} else {
    console.log('O número '+numeroSaber+' não está na lista de Fibonacci.');
}