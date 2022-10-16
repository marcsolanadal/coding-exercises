function reverse(str, result = "") {
    if (str.length <= 0) return result;
    result += str.slice(-1);
    return reverse(str.slice(0, str.length - 1), result);
}

/**
 * Recursive solution from https://towardsdatascience.com/finding-a-recursive-solution-184784b0aea0
 */
function reverseImproved(str) {
    if (str.length === 0) return "";
    return str.slice(-1) + reverse(str.slice(0, str.length - 1));
}

module.exports = {
    reverse,
    reverseImproved
}