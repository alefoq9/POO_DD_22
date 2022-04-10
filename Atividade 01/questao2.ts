let listaNumbers = [1,2,3,4,5,6]
let media : number = 0
let soma : number = 0

for (let listaNumber of listaNumbers){
    soma = soma + listaNumber
}

media = soma/listaNumbers.length

for (let listaNumber of listaNumbers){
    if (listaNumber >= media){
        console.log(listaNumber)
    }
}