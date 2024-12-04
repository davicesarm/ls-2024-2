function calc(n1, n2, op) {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
}

console.log(calc(2, 0, "/"));

class Calculadora {
    soma(a, b) { return a + b }
    multiplica(a, b) {return a * b} 
    subtrai(a, b) {return a - b}
    divide(a, b) {return a / b}
}

calc = new Calculadora()

print(calc.soma(1,2))