const prompt = require("prompt-sync")()

let N = prompt("Digite o número que deseja: ")
let entrance = parseInt(N)

if (isNaN(entrance)) {
    console.log("Não digitou um Nº Válido")
} else {
    let primo = true}

        if (entrance <=1) {
            primo = false
        } else {
            for (let x = 2; x <= Math.sqrt(entrance); x++)
        {
            if (entrance % x == 0) {
                primo = false;
                break
        }
     }
}
if (primo) {
    console.log (entrance + " é um número primo.")
} else {
    console.log (entrance + " NÃO é um número primo")
}