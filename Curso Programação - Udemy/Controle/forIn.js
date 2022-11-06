const notas = [6.2, 5.6, 5.2, 9.5]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Julia',
    sobrenome: 'Oliveira',
    idade: 29,
    peso: 90
}

for(j in pessoa){
    console.log(`${j} = ${pessoa[j]}`)
}


const valor = [100, 200, 300, 500]

for(dinheiro in valor){
    console.log(dinheiro, valor[dinheiro])
}

