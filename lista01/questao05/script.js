var calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', function(){
    const preco = Number(document.getElementById('precoProduto').value);

    const quantidade = Number(document.getElementById('quantidadeProduto').value);

    const dinheiro = Number(document.getElementById('dinheiroRecebido').value);

    const res = document.getElementById('resultado');

    const mult = preco * quantidade;

    const subt = dinheiro-mult;

    if(dinheiro >= mult){
        res.innerHTML = `TROCO = ${subt.toFixed(2)}`;
    }else{
        res.innerHTML = `Dinheiro insuficiente`;
    }

    
});