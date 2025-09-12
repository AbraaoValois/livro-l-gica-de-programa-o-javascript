const frm = document.querySelector("form");
const resp = document.querySelector ("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value) //obtém o valor informado
    let resposta = `Entre ${numero} e 1: `//string para montar a resposta.

    for (let i = numero; i > 0; i = i - 1) { //cria um for decrescente
        resposta = resposta + i + " , " //resposta acomula números e virgula
    }

    resp.innerText = resposta //exibe a resposta
})