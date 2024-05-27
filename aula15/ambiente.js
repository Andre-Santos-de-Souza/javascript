let num = [5, 8, 2, 9, 3]

num[5] = 2

console.log(num)

console.log(num.push(7))// método push() é utilizado para adicionar um ou mais elementos ao final de um array.

console.log(num.sort())//O método sort() é uma função incorporada em JavaScript que ordena os elementos de um array no local e retorna o array ordenado. 

console.log(`O vetor tem ${num.length} posições.`)//A propriedade length em JavaScript é usada para obter o número de elementos em um array

console.log(`O primeiro valor do vetor é ${num[0]}`)


for(var pos = 0;pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`\n`)

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`\n`)

var pos = num.indexOf(8)
var r = (pos == -1) ? 'O valor não foi encontrado' : `O valor 8 está na posição ${pos}`
console.log(r)