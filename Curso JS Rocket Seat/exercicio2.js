function controleFinanceiro(){

let salarioCaio = 3500
let salarioJulia = 2200
let agua = 100
let luz = 120
let telefone = 65
let alimentacao = 400

const receita = [salarioCaio, salarioJulia]
const despesas = [agua, luz, telefone, alimentacao]



var somaReceita = 0

for(var i = 0; i < receita.length; i++){
    somaReceita += receita[i]}

var somaDespesas = 0

for(var j = 0; j < despesas.length; j++){
    somaDespesas += despesas[j]
}

var final = somaReceita - somaDespesas
var finalFormatado = final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


//console.log(somaReceita)
//console.log(somaDespesas)
//console.log(final)
//console.log(finalFormatado)

if(final > 0){
    console.log(`A sua família está com um saldo positivo de ${(finalFormatado)}`)
} else if(final < 0){
    console.log(`A sua família está com saldo negativo de ${finalFormatado}`)
}



}

controleFinanceiro()