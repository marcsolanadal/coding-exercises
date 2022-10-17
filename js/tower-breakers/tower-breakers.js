
/**
 * Generates the board with `n` towers of `m` height.
 * 
 * @param {int} n Tower number
 * @param {int} m Tower height
 * @returns {int[]} Board
 */
function generateBoard(n, m) {
    return Array(n).fill(m);
}

/**
 * Gets the dividends that a reminder of zero.
 * The same number is removed as stated in the problem.
 * 
 * @param {int} number 
 * @returns {int[]} Dividends
 */
function getEventlyDivisibleNums(number) {
    let dividends = [];

    for (let n = 1; n < number; n++) {
        if (number % n === 0) {
            dividends.push(n);
        }
    }

    return dividends;
}

function gameLoop(board, turn = 0) {
    const sum = board.reduce((acc, num) => acc += num);
    if (sum === board.length) return turn;

    return board.map((tower, index) => {
        const moves = getEventlyDivisibleNums(tower);

        return moves.map((num) => {
            board[index] = num;
            turn = turn + 1;

            return gameLoop(board, turn);
        });
    });
}

function play(towerNum, towerHeight) {
    let board = generateBoard(towerNum, towerHeight);
    const turnTree = gameLoop([2, 3]);
}

play(1, 3);

module.exports = {
    generateBoard,
    getEventlyDivisibleNums,
    gameLoop,
}