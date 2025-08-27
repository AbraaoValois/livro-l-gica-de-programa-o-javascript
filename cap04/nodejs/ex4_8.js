const prompt = require("prompt-sync")() //adicionei o pacote prompt-sync
const valor = Number(prompt("Valor da compra R$: ")) //lê o valor da compra 
const aux = Math.floor(valor / 20) // aux =nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // limita o nº de parcelas entre 1 e 6 -- operador ternário
const valorParcela = valor / parcelas // calculo valor da parcela

console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`)
