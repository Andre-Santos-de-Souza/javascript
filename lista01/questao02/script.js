const calcularBtn = document.getElementById('calcularBtn') 

calcularBtn.addEventListener('click', function(){
    const base = Number(document.getElementById('base').value);
    const altura = Number(document.getElementById('altura').value);
    
    const area = base * altura;
    const perimetro = 2 * (base + altura)
    const diagonal = Math.sqrt(base**2+ altura**2)
    
    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `<p>AREA = ${area.toFixed(4)}</p> <p>PERIMETRO = ${perimetro.toFixed(4)}</p> <p>DIAGONAL = ${diagonal.toFixed(4)}</p>`
})