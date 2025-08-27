/*Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for até 20% maior que a permitida, exibirá "Multa leve". E, se a velocidade for
superior a 20% da velocidade permitida, exiba "Multa Grave"*/

const frm = document.querySelector("form");
const vel = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const kmrod = Number(document.querySelector("#inVelocidade").value);
    const velocidadeCondutor = Number(document.querySelector("#inVelocidadeCondutor").value);

    if (velocidadeCondutor > kmrod * 1.2) {
        vel.innerText = "Multa Grave";
    } else if (velocidadeCondutor > kmrod) {
        vel.innerText = "Multa Leve";
    } else {
        vel.innerText = "Sem Multa";
    }

    frm.reset();
});