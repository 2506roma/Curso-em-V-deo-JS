var num = [12, 0, -1, 3, 50]

for (let n = 0; n < num.length; n++){
    console.log(`Primeiro numero na possição ${n} indice ${num[n]}`)
}
console.log("  ")
console.log("   ACIMA MAIS COMPLEXA VS EMBAIXO MAIS SIMPLES")
console.log("  ")
 for (let n in num){
    console.log(`Primeiro numero na possição ${n} indice ${num[n]}`)

 }