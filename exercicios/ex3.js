function min(arr) {
    let menor = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i]
        }
    }
    return menor
};

function max(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return maior
};

function range(start = 0, end, step = 1) {
    const arr = [];
    for(let i = start; i < end; i += step) {
        arr.push(i)
    }
    return arr;
}

function zip(arr1, arr2) {}