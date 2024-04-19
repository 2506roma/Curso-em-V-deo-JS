function contar(){

    var iniciotxt = window.document.querySelector('input#itxt')
    var fimtxt = window.document.querySelector('input#ftxt')
    var passotxt = window.document.querySelector('input#ptxt')
    var res = window.document.getElementById('res')

    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
     
    
     res.innerHTML = ''

     if (passo == 0){
         res.innerHTML = "O Valor de passo não deve ser Zero"
         return;
     }
    if (inicio <= fim ){
         for (var i = inicio; i <= fim ; i = passo + i){
             res.innerHTML += i +' , '
         }
     }else if (inicio >= fim){
        for(var i = inicio; i >= fim; i = passo - i){
            res.innerHTML += i + ' , '
        }
     }

}