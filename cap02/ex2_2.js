//cria referencia ao form e aos elementos h3 e h4 (resposta).

const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');


//cria um "ouvinte" para o evento de submit do form

frm.addEventListener('submit', (e) => {
    const titulo = frm.inTitulo.value; //obtém o valor do campo inTitulo
    const duracao = Number(frm.inDuracao.value); //obtém o valor do campo inDuracao

    const horas = Math.floor(duracao / 60); //calcula as horas
    const minutos = duracao % 60; //calcula os minutos

    resp1.innerText = titulo;  //exibe as respostas
    resp2.innerText = `${horas} horas e ${minutos} minutos`;

    e.preventDefault(); //evita o envio do form

});