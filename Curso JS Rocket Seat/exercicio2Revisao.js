let familia = {
    receitas: [3500, 2100, 400],
    despesas: [100, 400, 500, 800, 400]
}

function soma(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calcularBalanco(){
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)

    const total = calcularReceitas - calcularDespesas

    const estaOk = total >= 0

    let textoBalanco = 'negativo'

    if(estaOk){
        textoBalanco = 'positivo'
    }

    console.log(`Seu saldo é positivo de ${total}`)

}

calcularBalanco()

