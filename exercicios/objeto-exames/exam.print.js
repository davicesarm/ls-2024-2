import { ExamsManager } from "./exam.js";

const gabarito = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "d",
    q5: "e",
};

const peso = {
    q1: 1,
    q2: 3,
    q3: 1,
    q4: 2,
    q5: 1,
};

const examsManager = new ExamsManager(gabarito, peso);

const provas = [
    {
        nome: "Davi",
        resposta: {
            q1: "b",
            q2: "b",
            q3: "e",
            q4: "d",
            q5: "d",
        },
    },
    {
        nome: "Arthur",
        resposta: {
            q1: "a",
            q2: "a",
            q3: "c",
            q4: "a",
            q5: "e",
        },
    },
    {
        nome: "Mari",
        resposta: {
            q1: "d",
            q2: "c",
            q3: "c",
            q4: "d",
            q5: "a",
        },
    },
];

for (const prova of provas) {
    examsManager.add(prova);
}

console.log("Media:");
console.log(examsManager.avg());
console.log("Min:");
console.log(examsManager.min());
console.log("Max:");
console.log(examsManager.max());
let limite = 3.5;
console.log(`Menor que ${limite}:`);
console.log(examsManager.lt(limite));
console.log(`Maior que ${limite}:`);
console.log(examsManager.gt(limite));
