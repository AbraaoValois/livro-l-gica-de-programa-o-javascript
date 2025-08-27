const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const pessoas = Number(prompt("Informe o número de pessoas: ")) //lê dados de entrada
const peixes = Number(prompt("Nº de Peixes: "))

let pagar //declara a variável pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`) //exibe o valor a pagar
