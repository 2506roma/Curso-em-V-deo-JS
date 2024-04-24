var num = [];
var soma1 = 0
var soma = 0;
var somatxt = window.document.getElementById('soma')

function adicionar(){
    var res = window.document.getElementById('stxt')
    var n = Number(window.document.getElementById('ntxt').value)
    var comp = num.indexOf(n) 
    // window.alert(comp)
    if (n > 100 || n < 1 || n == " "|| comp >= 0){
        window.alert('Digite um número entre 1 e 100')
    }else{
        soma += n
        num.push(n)        
        res.innerHTML = ""
         

        for (var i in num){
            soma1 ++
            window.alert(`${soma1}`)
            
            var option = document.createElement("option")
            option.text = (`Valor add ${num[i]}`)
            res.add(option) 

            window.document.getElementById('ntxt').value = ' '  

        }   
    }
       
    
}

function finalizar(){
    somatxt.innerHTML = `soma dos valores ${soma} <br>`
    somatxt.innerHTML += ` <br> `
    somatxt.innerHTML += `Ao todo temos ${soma1} Números cadastrados `
    
}
function limpar(){
    location.reload()
}