function tipoDoTriangulo(...lados) {
    const lArr = [];

    for (let lado of lados) {
        lArr.push(lado);
    }

    if (lArr.length > 3) {
        return "Não é um triangulo nao mano";
    } else if (
        lArr[0] >= lArr[1] + lArr[2] ||
        lArr[1] >= lArr[2] + lArr[0] ||
        lArr[2] >= lArr[1] + lArr[0]
    ) {
        return "Not a triangululuglo";
    }

    const todosDiferentes = new Set(lArr).size === lArr.length;
    if (lArr.every((x) => x == lArr[0])) {
        return "Equivalatero";
    } else if (todosDiferentes) {
        return "Escalareno";
    } else {
        return "icsolqueles";
    }
}

console.log(tipoDoTriangulo(1, 2, 3, 4));
console.log(tipoDoTriangulo(1, 2, 3));
