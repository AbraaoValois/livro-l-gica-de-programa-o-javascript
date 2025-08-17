//cria refência ao form e os elementos de resposta.

const frm = document.querySelector("form")
const resultado = document.querySelector("h2")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado.

frm.addEventListener("submit",(e) => {
    const produto = frm.inProduto.value // obtém o conteúdo do campo inProduto
    const preco = Number(frm.inPreco.value);

    //calcula a promoção: 2 produtos com o preço cheio + 1 com 50% de desconto

    const desconto = preco / 2;
    const total = (2 * preco) + desconto;

    // exibe a mensagem da promoção

    resultado.innerText =
    ` Promoção de ${produto}\n ` + 
    `Leve 3 por R$ ${total.toFixed(2)}\n` +
    `O 3º sai por apenas R$ ${desconto.toFixed(2)}`;

    e.preventDefault(); // impede o envio do formulário
});