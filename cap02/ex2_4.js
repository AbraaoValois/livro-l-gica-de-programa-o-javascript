// cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const form = document.querySelector('form');
const resp = document.querySelector('h3');

//cria um "ouvinte" para o evento de submit do form

form.addEventListener('submit', (e) => {
    const quilo = Number(form.inQuilo.value) //obtém o conteúdo dos campos
    const consumo = Number(form.inConsumo.value)

    const valor = (quilo / 1000) * consumo //calcula o valor a ser pago
    resp.innerText = `Valor a ser pago R$ ${valor.toFixed(2)}` //exibe a resposta

    e.preventDefault() //evita que o form seja enviado

 })