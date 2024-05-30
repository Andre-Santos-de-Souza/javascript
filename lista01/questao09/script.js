const calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', function(){
    const medidaA = Number(document.getElementById('medidaA').value);

    const medidaB = Number(document.getElementById('medidaB').value);

    const medidaC = Number(document.getElementById('medidaC').value);

    const areaQuadrado = medidaA*medidaA;

    const areaTriangulo = (1/2)*medidaA*medidaB;

    const areaTrapezio = ((medidaA+medidaB)*medidaC)/2;

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>AREA DO QUADRADO = ${areaQuadrado.toFixed(4)}</p> <p>AREA DO TRIANGULO = ${areaTriangulo.toFixed(4)}</p> <p>AREA DO TRAPEZIO = ${areaTrapezio.toFixed(4)}</p>`;
});