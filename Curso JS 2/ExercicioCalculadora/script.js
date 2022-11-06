function calcular(n1, n2){
n1 = window.document.getElementById('n1').value
n2 = window.document.getElementById('n2').value

seletor = window.document.getElementById('seletor').value

switch(seletor){
    case '+':
        calculo = (n1 + n2)
        document.getElementById('resultado').innerHTML = `O resultado de ${n1} + ${n2} é igual a ${calculo}`
        break
}



}