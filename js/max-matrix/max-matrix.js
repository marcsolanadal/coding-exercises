function sumArray(arr, j) {
    let sum = 0;
    for (let x = 0; x < j; x++) {
        for (let y = 0; y < j; y++) {
            sum += arr[x][y];
        }
    }
    return sum;
}

function generateMoves(arr, j) {
    return arr.reduce((acc, _, index) => {
        if (
            (index >= 0 && index < j) ||
            (index > arr.length - j - 1 && index < arr.length)
        ) {
            acc = [...acc, `c${index}`, `r${index}`];
        }
        return acc;
    }, []);
}

function swapRow(arr, index) {
    return [
        ...arr.slice(0, index),
        arr[index].reverse(),
        ...arr.slice(index + 1, arr.length),
    ];
}

function swapColumn(arr, index) {
    let temp = 0;
    for (let n = 0; n < arr.length / 2; n++) {
        temp = arr[n][index];
        arr[n][index] = arr[arr.length - 1 - n][index];
        arr[arr.length - 1 - n][index] = temp;
    }
    return arr;
}

function swap(arr, move) {
    return move[0] === "r"
        ? swapRow(arr, Number.parseInt(move[1], 10))
        : swapColumn(arr, Number.parseInt(move[1], 10));
}

function findMax(arr, moves, k, j) {
    if (k === 0 || moves.length === 0) return sumArray(arr, j);

    const maxValues = moves.map((move, index) => {
        let nextArr = swap(arr, move);

        let movesLeft = [
            ...moves.slice(0, index),
            ...moves.slice(index + 1, moves.length),
        ];

        return findMax(nextArr, movesLeft, k - 1, j);
    });

    return Math.max(...maxValues);
}

function maxMatrix(arr, maxMoves, j) {
    const moves = generateMoves(arr, j);
    return findMax(arr, moves, maxMoves, j);
}

const test = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(`maxMatrix: ${maxMatrix(test, 2, 1)}`);

const testArr2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];
console.log(`maxMatrix: ${maxMatrix(testArr2, 6, 2)}`);