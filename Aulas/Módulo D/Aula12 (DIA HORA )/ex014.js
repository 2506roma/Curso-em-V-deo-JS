var agora = new Date()

var diaSem = agora.getDay()

switch (diaSem){

    case 0:
        console.log('DOMINGO')
        break
    case 1:
        console.log('SEGUNDA')
        break
    case 2:
        console.log('Terça feira')
        break
    case 3:
        console.log('Quarta Feira')
        break
    case 4:
        console.log('Quinta feira')
        break
    case 5:
        console.log('Sexta Feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERO] Data invalida')
        break
}