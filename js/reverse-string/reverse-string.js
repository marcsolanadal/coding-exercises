function reverse(str, result = "") {
    if (str.length <= 0) return result;
    result += str.slice(-1);
    return reverse(str.slice(0, str.length - 1), result);
}

module.exports = {
    reverse
}