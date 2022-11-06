function transformaGraus(graus){
    const celsiusExiste = graus.toUpperCase().includes('C')
    const fahrenheitExiste = graus.toUpperCase().includes('F')

    if(!celsiusExiste && !fahrenheitExiste){
        throw new Error('Grau não identificado')
    }

    // fluxo ideial F para C
    let numero = Number (graus.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let novoSinal = 'C'


    // fluxo alternativo 
    if(celsiusExiste){
    numero = Number (graus.toUpperCase().replace("C", ""))
    formula = (celsius) => (celsius * 9/5) + 32
    novoSinal = 'F'
    }

    return formula(numero) + novoSinal


}

try {
    console.log(transformaGraus('0C'))
    

} catch (error){
    console.log(error)
}




