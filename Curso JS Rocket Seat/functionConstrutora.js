/*
function() constructor

* expressão new
*criar um novo objeto
*this keyword

*/

function Person(name){
    this.name = name // esse this daqui de dentro vai referenciar o caio lá de fora
    this.walk = function(){
        return this.name + ' está andamendo'
    }
}
const caio = new Person('Caio')
const xulia = new Person('Xulia')
console.log(caio.walk())
console.log(xulia.walk())