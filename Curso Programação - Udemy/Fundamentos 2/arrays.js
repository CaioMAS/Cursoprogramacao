const valores = [7.7, 8.9, 9.2, 10.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length) //saber quantos elementos tem dentro desse array

valores.push({id:3}, false, null, 'test') //acrescenta valores no array
console.log(valores)

console.log(valores.pop()) // retira o ultimo item do array
delete valores[0]
console.log(typeof valores)
