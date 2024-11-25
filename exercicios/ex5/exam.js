export class ExamsManager {
    constructor(gabarito, peso) {
        this.gabarito = gabarito;
        this.peso = peso;
        this.provas = [];
    }
    add(prova) {
        prova.nota = Object.keys(prova.resposta).reduce((nota, questao) => {
            return (
                nota +
                (prova.resposta[questao] === this.gabarito[questao]
                    ? this.peso[questao]
                    : 0)
            );
        }, 0);
        this.provas.push(prova);
    }

    avg() {
        return (
            this.provas.reduce((soma, prova) => soma + prova.nota, 0) /
            this.provas.length
        );
    }

    min() {
        return this.provas.reduce(
            (menor, prova) => (prova.nota < menor ? prova.nota : menor),
            this.provas[0].nota
        );
    }

    max() {
        return this.provas.reduce(
            (menor, prova) => (prova.nota > menor ? prova.nota : menor),
            this.provas[0].nota
        );
    }

    lt(limite) {
        return this.provas.filter((prova) => prova.nota < limite);
    }

    gt(limite) {
        return this.provas.filter((prova) => prova.nota > limite);
    }
}
