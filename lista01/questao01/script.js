const calcularBtn = document.getElementById("calcularBtn");

calcularBtn.addEventListener("click", function() {
    const largura = parseFloat(document.getElementById("largura").value);
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const precoMetroQuadrado = parseFloat(document.getElementById("preco").value);

    const area = largura * comprimento;
    const precoTerreno = area * precoMetroQuadrado;

    document.getElementById("resultado").innerHTML = `<p>Área do terreno: ${area.toFixed(2)} metros quadrados</p> <p>Preço do terreno: R$${precoTerreno.toFixed(2)}</p>`;
});