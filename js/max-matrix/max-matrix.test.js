const { maxMatrix } = require("./max-matrix");

test("solves a 3x3 matrix with n=1", () => {
    const steps = 2;
    const n = 1;
    const array = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    expect(maxMatrix(array, steps, n)).toBe(9);
});

test("solves a 5x5 matrix with n=2", () => {
    const steps = 4;
    const n = 2;
    const array = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];

    expect(maxMatrix(array, steps, n)).toBe(9);
});