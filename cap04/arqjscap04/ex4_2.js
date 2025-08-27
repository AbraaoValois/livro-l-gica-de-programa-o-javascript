//cria uma referência ao form e elemento onde será exibida a resposta

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvinte para o evento de envio do formlário

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso = (masculino ? 22 : 21) * Math.pow(altura, 2)

    //apresenta a resposta (altera o conteudo do elemento h3 da página.)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`


})
 