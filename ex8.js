const prompt = require("prompt-sync")();

let quantidade = 0;
let numero = parseInt(prompt("Digite um número (0 para sair): "));

while (numero !== 0) {
    quantidade++;
    numero = parseInt(prompt("Digite outro número (0 para sair): "));
}

console.log("Quantidade total de números digitados: " + quantidade);