class Calculadora {
    soma(a, b) { return a + b }
    multiplica(a, b) {return a * b} 
    subtrai(a, b) {return a - b}
    divide(a, b) {return a / b}
}

calc = new Calculadora()

print(calc.soma(1,2))