let dia:number = 7
let hora:number = 8
let minuto:number = 35

if(dia > 0 && dia < 8){
    if(hora >= 0 && hora < 25){
        if(minuto >= 0 && minuto < 60){
            if (dia > 1 && dia < 7){
                if(hora >= 8 && hora <= 11 || hora >= 14 && hora <= 17){
                    if(minuto >= 0 && minuto <= 59)
                    console.log("Sim")
                    }
                    else{
                        console.log("Não")
                    }
                }
            else if(dia == 7){
                if (hora >= 8 && hora <= 11){
                    if (minuto >= 0 && minuto <= 59)
                    console.log("Sim")
                }
                else{
                    console.log("Não")
                }
            }
            else {
                console.log("Não")
            }
        }
        else{
            console.log("Valor Inválido")
        }
    }
    else{
        console.log("Valor Inválido")
    }
}
else{
    console.log("Valor Inválido")
}