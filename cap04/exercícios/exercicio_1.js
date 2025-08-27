const frm = document.querySelector("#frmParImpar");
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(document.querySelector("#inNumero").value)

    if(numero % 2 == 0){
        resp.innerText = "O número " + numero + " é par"
    } else {
        resp.innerText = "O número " + numero + " é ímpar"
    }

    
    frm.reset()
})