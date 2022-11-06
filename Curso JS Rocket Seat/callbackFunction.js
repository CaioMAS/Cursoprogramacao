// callback function é uma função que está passando 
//em parâmetro para outra função

function sayMyName(name){
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a callbak')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)