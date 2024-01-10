// Seleciona os elementos de entrada e os botões
const salarioInput = document.getElementById('value'); //chamando o valor value
const gastoInput = document.getElementById('spet'); //Chamando o valor spet
const calculateButton = document.getElementById('calculate'); //chamando o valor calculate
const resultElement = document.getElementById('total'); //chamando o valor total

// Função para calcular a porcentagem de gasto e exibir o resultado
function calcularPorcentagemGasto() {
    const salarioInicial = parseFloat(salarioInput.value); // Converte o valor do salário para float
    const gasto = parseFloat(gastoInput.value); // Converte o valor do gasto para float

    if (isNaN(salarioInicial) || isNaN(gasto)) { // Verifica se algum dos valores é inválido (NaN)
        resultElement.textContent = 'Valores inválidos!'; // Exibe uma mensagem de erro
        return; // Sai da função
    }

    const porcentagemGasto = (gasto / salarioInicial) * 100; // Calcula a porcentagem de gasto
    resultElement.textContent = porcentagemGasto.toFixed(2) + '%'; // Exibe o resultado na GUI com duas casas decimais
}

// Adiciona um evento de clique ao botão "Calcular"
calculateButton.addEventListener('click', calcularPorcentagemGasto);