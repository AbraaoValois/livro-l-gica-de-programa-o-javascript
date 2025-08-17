// Obtém uma referência para o formulário HTML através do seu ID.
// O método `getElementById` retorna o elemento do DOM (Document Object Model) 
// que possui o ID especificado.
const frm = document.getElementById('form'); 

// Obtém referências para os elementos HTML onde as respostas serão exibidas.
// Novamente, usamos `getElementById` para selecionar os elementos pelo ID.
const resp1 = document.getElementById('outResp1');
const resp2 = document.getElementById('outResp2');
const resp3 = document.getElementById('outResp3');

// Adiciona um "ouvinte de evento" (event listener) ao formulário.
// Este ouvinte irá "ouvir" o evento de "submit" (envio) do formulário.
// Quando o formulário for enviado, a função anônima (função callback) 
// dentro do `addEventListener` será executada.
frm.addEventListener("submit", (e) => {

    // O parâmetro `e` representa o evento de envio do formulário.
    // `e.preventDefault()` impede o comportamento padrão do formulário, 
    // que é recarregar a página. Isso é importante para que possamos 
    // processar os dados do formulário com JavaScript sem interrupções.
    e.preventDefault();

    // Obtém o valor do campo de entrada de texto com o ID "inVeiculo".
    // `.value` retorna o valor atual do campo.
    const veiculo = frm.inVeiculo.value;

    // Obtém o valor do campo de entrada de número com o ID "inPreco".
    // `Number()` converte o valor do campo (que é uma string) para um número.
    const preco = Number(frm.inPreco.value);

    // Calcula o valor da entrada (50% do preço do veículo).
    const entrada = preco * 0.50;

    // Calcula o valor da parcela (50% do preço do veículo dividido em 12 vezes).
    const parcela = (preco * 0.50) / 12;

    // Exibe o nome do veículo na tag HTML com o ID "outResp1".
    // `innerText` define o conteúdo de texto de um elemento HTML.
    resp1.innerText = `Promoção: ${veiculo}`;

    // Exibe o valor da entrada formatado como moeda (com 2 casas decimais) 
    // na tag HTML com o ID "outResp2".
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;

    // Exibe o valor da parcela formatado como moeda (com 2 casas decimais)
    // na tag HTML com o ID "outResp3".
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`;
});