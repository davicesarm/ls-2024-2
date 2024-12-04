import { percentageByCategory, total, totalByCategory } from "./investments.js"

const investments = [
    {
        name: 'Tesouro Selic 2029',
        value: 15500,
        category: 'pos'
    },
    {
        name: 'CDB Banco A',
        value: 10000,
        category: 'pos'
    },
    {
        name: 'CDB Banco X',
        value: 10000,
        category: 'icpa+'
    }
]

// console.log(total(investments))
// console.log(totalByCategory(investments, 'icpa+'))
console.log(percentageByCategory(investments))