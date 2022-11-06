function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area} m²`)
    } else {
        return area
    }
}

console.log(area(4, 2))
console.log(area(10))
console.log(area())
console.log(area(2, 5, 9)) //ignora todos os demais parêmetros
console.log(area(5, 5))
