function calcular (number1, operador, number2){
let resultado

switch (operador) {
    case '+':
        resultado = number1 + number2
    break;
    case '-':
        resultado = number1 - number2
    break;
    case '*':
        resultado = number1 * number2 
    break;

    case '/':
        resultado = number1 / number2  
    break;

    default:
    console.log('não implementado')
    break;
}
return resultado
}


console.log(calcular(4, '/', 1))

