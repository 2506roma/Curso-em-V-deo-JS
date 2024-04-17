function carregar (){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagens')    
    var para = window.document.querySelector('body > header > h1')
    var roda = window.document.querySelector('body > footer > p')

    var data = new  Date()
    var hora = data.getHours()    

    msg.innerHTML = `Agora são ${hora} Horas.`

    if(hora >= 0 && hora < 12 ){
        // Bom dia
        imagem.src ='Manhã.jpeg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18){
        // Boa Tarde
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        // Boa Noite
        imagem.src = 'Noite.jpg'
        document.body.style.background = '#515154'
        para.style.color = 'white'
        roda.style.color = 'white'

    }
}