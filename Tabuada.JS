const prompt = require("prompt-sync")();

let a = prompt("Digite o número que deseja calcular a tabuada: ")
let mult 
for ( let b = 0 ; b <=10 ; b++ ) {
    mult = a * b
    console.log("A tabuada do "+ a +" é: " + a + " x " + b + " = " + mult)
}
