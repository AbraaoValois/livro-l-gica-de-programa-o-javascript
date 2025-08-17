// cria referência ao form e os elementos de resposta
const frm = document.querySelector('form');
const resultado = document.querySelector('#resultado');

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener('submit', (e) => {
    const valor = Number(document.querySelector('#inValor').value); // preço por 15 min
    const tempo = Number(document.querySelector('#inTempo').value); // tempo total usado

    // calcula quantos blocos de 15 minutos foram usados (arredonda pra cima)
    const blocos = Math.ceil(tempo / 15);

    // calcula o total a pagar
    const valorTotal = blocos * valor;

    resultado.textContent = `O valor total é R$ ${valorTotal.toFixed(2)}`;

    e.preventDefault(); // impede o envio do formulário
});
