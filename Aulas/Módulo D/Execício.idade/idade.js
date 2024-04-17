function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Algo de errado não esta certo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // criança 
                img.setAttribute('src', 'Criança.homem.jpg')
            }else if(idade < 21){
                // Adolecente
                img.setAttribute('src', 'adolecente.homem.jpg')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'Adulto.homem.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'velho.homem.jpeg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // criança 
                img.setAttribute('src', 'criança.mulher.jpg')
            }else if(idade < 21){
                // Adolecente
                img.setAttribute('src', 'adolecente.mulher.jpeg')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'adulto.mulher.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'velha.mulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}