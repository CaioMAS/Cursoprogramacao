const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // afirmar que o numéro é inteiro
console.log(Number.isInteger(peso2)) // afirmar que o numéro é inteiro

const avaliacao1 = 7.558
const avaliacao2 = 6.568

const total = avaliacao1 * peso1 + avaliacao2*peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed( ) essa função vai fazer mostrar o número que quer de casas decimais
console.log(media.toString(2)) //toString( ) transforma o número em uma string e mostra em número binário
console.log(typeof media)