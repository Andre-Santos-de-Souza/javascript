var calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', function(){
    const x = Number(document.getElementById('valorX').value);

    const y = Number(document.getElementById('valorY').value);

    const soma = x + y;

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `SOMA = ${soma}`;
})