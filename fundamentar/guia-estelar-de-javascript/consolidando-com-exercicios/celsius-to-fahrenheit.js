//Celcius fahrenheit

function transformaGraus(grau) {
    const buscaFahrenheit = grau.toUpperCase().includes('F')
    const buscaCelsius = grau.toUpperCase().includes('C')

    if(buscaCelsius) {
      let grauInterno = grau
      let valor = Number(grauInterno.toUpperCase().replace('C', ''))
      
      let fahrenheitToCelsius = valor * 9/5 + 32
      
      console.log(fahrenheitToCelsius+="F")
    }
    else if(buscaFahrenheit) {
        let grauInterno = grau 
         let valor =  Number(grauInterno.toUpperCase().replace("F",""))

        let celsiusToFahrenheit = (valor - 32) * 5/9

        console.log(celsiusToFahrenheit+="C")
    }
    else {
        console.log("Não implementado")
    }

}

transformaGraus("10c")
transformaGraus("96f")
