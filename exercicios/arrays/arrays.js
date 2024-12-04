function min(arr) {
    let menor = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return menor;
}

function max(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

function range(start, end = null, step = 1) {
    if (end === null) {
        end = start;
        start = 0;
    }

    const arr = [];
    for (let i = start; i < end; i += step) {
        arr.push(i);
    }
    return arr;
}

function zip(...arrs) {
    const zipped = [];
    for (let i = 0; i < arrs[0].length; i++) {
        const subArr = [];
        for (let j = 0; j < arrs.length; j++) {
            subArr.push(arrs[j][i]);
        }
        zipped.push(subArr);
    }
    return zipped;
}

function uniq(arr) {
    return [...new Set(arr)];
}

function sortNum(arr) {
    return arr.sort((a, b) => a - b);
}

console.log("min 1", min([1, 4, 2, 6, 10, 3])); // -> 1
console.log("min 2", min([1, 4, -1, 6, 10, 3])); // -> -1
console.log("max 3", max([1, 4, 2, 6, 10, 3])); // -> 10
console.log("range 4", range(10)); // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("range 5", range(1, 11)); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("range 6", range(0, 30, 5)); // -> [0, 5, 10, 15, 20, 25]
console.log("zip 7", zip(["moe", "larry"], [30, 40])); // -> [moe, 30], [larry, 40]
console.log(
    "zip 8",
    zip(["moe", "larry", "curly"], [30, 40, 50], [true, false, false])
); // -> [moe, 30, true], [larry, 40, false], [curly, 50, false]
console.log("uniq 9", uniq([1, 2, 1, 4, 1, 3])); // -> [1, 2, 3, 4]
console.log("uniq 10", uniq([1, 2, 1, 3, 3])); //  -> [1, 2, 3]
console.log("sort 11", sortNum([1, 3, 2])); // -> [1, 2, 3]
console.log("sort 12", sortNum([1, 2, 10, 3, 32])); // -> [1, 2, 3, 10, 32]
