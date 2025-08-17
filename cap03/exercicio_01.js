const prompt = require("prompt-sync")(); // adciona o pacote ao programa
const salario = Number(prompt(`Salário: R$ `))
const tempo = Number(prompt(`Tempo (anos): `))

const quadrienios = Math.floor(tempo / 4) //calcula quadriênios 
const acrescimo = salario * quadrienios / 100 // calcula o acréscimo

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário final R$: ${(salario + acrescimo).toFixed(2)}`)

