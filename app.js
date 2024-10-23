const maiorDeIdade = (idade, limiar = 18) => (idade >= limiar)

// console.log(maiorDeIdade(17)) // false
// console.log(maiorDeIdade(19)) // true

const soma = (...n) => {
    let somaTotal = 0;
    for (let num of n) {
        somaTotal += num;
    }
    return somaTotal;   
}


console.log(soma(1,2,3,4))