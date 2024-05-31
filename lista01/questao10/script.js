var calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', function(){
    const segundos = Number(document.getElementById('segundos').value);

    const hora = segundos/3600;
    const minuto = Math.floor((segundos%3600)/60);
    const se =  segundos%60;

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `${hora.toFixed(0)}:${minuto.toFixed(0)}:${se}`;

});