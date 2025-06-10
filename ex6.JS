const prompt = require("prompt-sync")()


let num = new Array(5)
//* Array é uma das formas no JScript para criação do vetor, pode ser utilizado também o [] *//


for (let i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Digite o " + (i+1) + " numero: "))
}

let maior = Math.max(...num)

console.log("O maior é: ", maior)