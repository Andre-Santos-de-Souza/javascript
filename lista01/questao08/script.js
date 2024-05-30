var calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', function(){
    const distanciaPercorrida = Number(document.getElementById('distanciaPercorrida').value);

    const combustivelGasto = Number(document.getElementById('combustivelGasto').value);

    const consumoMedio = distanciaPercorrida / combustivelGasto;

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `Consumo medio = ${consumoMedio.toFixed(3)}`;
});