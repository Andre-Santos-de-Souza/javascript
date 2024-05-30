var calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', function(){
    const raioCirculo = Number(document.getElementById('raioCirculo').value);

    const calcularRaio = (raioCirculo**2) * 3.14159;

    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `AREA = ${calcularRaio.toFixed(3)}`;
});