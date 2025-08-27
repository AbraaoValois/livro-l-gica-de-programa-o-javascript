//cria referência ao form e elementos de reposta ao programa.

const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')


//cria um ouvinte de evento, acionado quando o botão submit for clicado
    
frm.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const nota3 = Number(frm.inNota3.value)
    const nota4 = Number(frm.inNota4.value)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    resp1.innerText = `Média das notas ${media.toFixed(2)}`
    
    //cria condições

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}, você foi aprovado!`
        resp2.style.color = 'green'

    

    } else {
        resp2.innerText = `Que pena ${nome}, você foi reprovado!`
        resp2.style.color = 'red'
    
    }

})