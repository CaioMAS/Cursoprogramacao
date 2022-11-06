const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in num){ // esse primeiro x representa o índice... se o valor está na posição 0, 1, 2 ... num é o array descrito acima
    if(x == 5){
        break
    }
    console.log(`${x} = ${num[x]}`)
}


for(y in num){ 
    if(y == 5){
        continue
    }
    console.log(`${y} = ${num[y]}`)
}