var num = [323, 1, 0, 212, -1]

console.log(num)

num.push(-99)

console.log(num)


console.log(num.sort())


// num.sort(function(a, b) {
//     return a - b;
//   });

// Função de comparação de método (PQ PADRÃO DO `SORT()` OS NÚMEROS SÃO ORDENADOS ALFABETICAMENTE)
console.log(num.sort(function(a, b) {
    return a - b;}
    )
)