function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERROR] verifique os dados e tente novamente`)
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/bebe-homem-250.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovem-homem-250.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagem/homem-adulto-250.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagem/idoso-homem-250.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/bebe-mulher-250.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovem-mulher-250.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagem/mulher-adulta-250.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagem/idoso-mulher-250.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}