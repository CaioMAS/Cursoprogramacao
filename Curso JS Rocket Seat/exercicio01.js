function notas(nota){
    if(nota >= 90 && nota <= 100){
        console.log('A')
     }else if(nota >= 80 && nota <= 89){
        console.log('B')
    } else if (nota >= 70 && nota <79){
        console.log('C')
    } else if (nota >= 60 && nota < 69){
        console.log('D')
    } else if (nota <= 60 && nota >=0){ 
        console.log('F')
    } else {
        console.log('Nota inválida')
    }
        
    
}

notas(10)
notas(60)
notas(-5)
notas(20)
notas(100)
notas(94)