const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome , idade} = pessoa // tire o objeito pessoa o NOME e a IDADE
console.log(nome,idade)

const { nome: n , idade: i } = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
