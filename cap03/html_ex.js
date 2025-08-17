const form = document.querySelector("form");
const resultado = document.querySelector("h3");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.nome.value;
    const peso = Number(form.peso.value);
    const consumo = Number(form.consumo.value);

    const pesoGr = peso * 1000;
    const duracao = Math.floor(pesoGr / consumo);
    const sobra = pesoGr % consumo;

    resultado.innerHTML = `Duração: ${duracao} dias<br>Sobra: ${sobra} gramas`;
});
