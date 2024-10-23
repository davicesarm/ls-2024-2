const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Divisao por 0"
    } else {
        return a / b
    }
}

function calc(n1, n2, op) {
    switch (op) {
        case("+"):
            console.log(soma(n1,n2));
            break
        case("-"):
            console.log(subtrai(n1, n2));
            break
        case("*"):
            console.log(multiplica(n1, n2));
           break
        case("/"):
            console.log(divide(n1, n2));
            break
    }
}

calc(1, 2, "+")