const notas = [5.5, 7.9, 8.6, 10.5, 12.5, 4.4, 6.4]

//Sem callback

let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]) //push adicina algo dentro do array
    }
}

console.log(notasBaixas)

// Com callback

notasBaixas = notas.filter(function(nota){   //filter é uma função que vai filtrar os elementos de um array
    return nota < 7
}) 

console.log(notasBaixas)


