const bairro = prompt("Digite o nome do bairro: ");
let taxaEntrega

    switch(bairro) {
        case "Centro":
            taxaEntrega = 5.00
            break;
        case "Pirituba":
            taxaEntrega = 8.00
            break;
        case "Jardins":
            taxaEntrega = 10.00
            break;
        default:
            taxaEntrega = 12.00
    }

    alert(`A taxa de entrega para ${bairro} é R$ ${taxaEntrega.toFixed(2)}`);