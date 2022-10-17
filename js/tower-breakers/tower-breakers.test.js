const { generateBoard, getEventlyDivisibleNums, gameLoop } = require("./tower-breakers");

describe("tower-breakers", () => {

    describe("generateBoard()", () => {
        test("generates an array of `n` towers of `m` height", () => {
            expect(generateBoard(2, 6)).toEqual([6, 6]);
            expect(generateBoard(1, 1)).toEqual([1]);
            expect(generateBoard(6, 2)).toEqual([2, 2, 2, 2, 2, 2]);
        });
    });

    describe("getEventlyDivisibleNums()", () => {
        test("edgecase when number is 1", () => {
            expect(getEventlyDivisibleNums(1)).toEqual([]);
        });

        test("gets evenly divisible numbers for the target without itself", () => {
            expect(getEventlyDivisibleNums(12)).toEqual([1, 2, 3, 4, 6]);
        });
    });

    describe("gameLoop()", () => {
        test("hits a base case when all towers are 1", () => {
            expect(gameLoop([1, 1])).toBe(0);
        });

        test("returns the correct turn when the basecase was hit", () => {
            expect(gameLoop([1, 3])).toEqual([[], [1]]);
            expect(gameLoop([3, 3])).toEqual([[[1], [1]], [[1], [1]]]);
            // expect(gameLoop([6, 3])).toBe(3);
            // expect(gameLoop([7, 3])).toBe(2);
        });
    });

    describe("play()", () => {
        test("gets last ", () => {
            expect(play([3, 3])).toEqual([1, 2, 3, 4, 6]);
        });
    });

});