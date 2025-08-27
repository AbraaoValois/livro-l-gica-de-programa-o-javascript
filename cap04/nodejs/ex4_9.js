const prompt = require("prompt-sync")();
const numero = Number(prompt("Número(Centena): ")) // Lê um número de 3 dígitos

// Validação do número
if (numero < 100 || numero >= 1000) {
    console.log("Error... deve ser uma centena")
    return
} // Fim da validação

const num1 = Math.floor(numero / 100) //obtém o 1º número
const sobra = numero % 100 // obtém a sobra
const num2 = Math.floor(sobra / 10) // obtém o 2º número
const num3 = sobra % 10 // obtém o 3º número

console.log(`Invertido: ${num3}${num2}${num1}`) //exibe o número invertido.