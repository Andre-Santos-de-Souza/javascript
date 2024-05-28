const calcularBtn = document.getElementById('calcularBtn')

calcularBtn.addEventListener('click', function(){
    const nome1 = String(document.getElementById('nome1').value)
    const idade1 = Number(document.getElementById('idade1').value);
    const nome2 = String(document.getElementById('nome2').value)
    const idade2 = Number(document.getElementById('idade2').value);

    const calcularMedia = (idade1+idade2) / 2;

    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `A idade média de ${nome1} e ${nome2} é de ${calcularMedia} anos`
})