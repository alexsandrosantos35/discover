//Fluxo de caixa familiar

let fluxos = {
    despesas: [230, 470, 60, 580],
    entradas: [300, 500, 70, 600]
}

function sum(array) {
    let  total = 0
    
    for(value of array) {
        total += value
    }
    return total
}

function balanco() {
    const totalDespesas = sum(fluxos.despesas)
    const totalEntradas = sum(fluxos.entradas)

    const balanco = totalEntradas - totalDespesas


    console.log("Saldo: "+balanco)

    if(balanco >= 0){
        console.log("Saldo positivo")
    }
    else {
        console.log("Saldo negativo")
    }
}
balanco()