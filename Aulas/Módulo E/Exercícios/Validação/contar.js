function contar(){

    var iniciotxt = window.document.querySelector('input#itxt')
    var fimtxt = window.document.querySelector('input#ftxt')
    var passotxt = window.document.querySelector('input#ptxt')
    var res = window.document.getElementById('res')

    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
     
    
     res.innerHTML = ''
     if(inicio == 0){
        window.alert('Impossivel contar')
     }

     if (passo == 0){
        
        res.innerHTML = "O valor de passos não deve ser 0, considerando passo 1 <br>"

        
        
        for (var i = inicio; i <= fim ; i += passo){
            passo = 1
            res.innerHTML += i +' , '
        }
         
     } else if (inicio <= fim ){
         for (var i = inicio; i <= fim ; i += passo){
             res.innerHTML += i +' , '
         }
     }else if (inicio >= fim){
        for (var i = inicio; i >= fim; i -= passo) {
            res.innerHTML += i + ' , ';
        }
     }

}