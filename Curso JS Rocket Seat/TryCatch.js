function sayMyName(name = ''){
    if(name === ''){
        throw new Error("Nome é necessário")
    }

    console.log('depois do erro')
}

try{
sayMyName()
} catch(e){
console.log(e)
}

console.log('após a função de erro')