const prompt = require("prompt-sync")(); //adiciona pacote para a entrada de dados

const pesoKg = Number(prompt(`Peso (kg): `)); //lê o peso em kg
const consumo = Number(prompt(`Consumo diário (gr): `));// .. em gr

const pesoGr = pesoKg * 1000 //cria uma variável auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo); //calculo das resposta
const sobra  = pesoGr % consumo; //calculo do resto

console.log(`Duração: ${duracao} dias`); //dados de saída.
console.log(`Sobra: ${sobra} gramas`); //dados de saída. 