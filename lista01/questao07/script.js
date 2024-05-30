var calcularBtn = document.querySelector('input#calcularBtn');

calcularBtn.addEventListener('click', function(){
    const nome = String(document.getElementById('idNome').value);

    const valorHora = Number(document.getElementById('valorHora').value);

    const horasTrabalhadas = Number(document.getElementById('horasTrabalhadas').value);

    const pagamentoFuncionario = valorHora*horasTrabalhadas;

    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `O pagamento para ${nome} deve ser ${pagamentoFuncionario.toFixed(2)}`;
});