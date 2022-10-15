function removeCharAtIndex(word, index) {
    return word.slice(0, index) + word.slice(index + 1, word.length);
}

function isAnagram(word1, word2) {
    if (word1 === word2) return false;

    word1.split("").forEach(letter => {
        const index = word2.indexOf(letter);
        if (index !== -1) {
            word2 = removeCharAtIndex(word2, index);
        }
    });

    return (word2.length === 0);
}

function filterAnagrams(list, result = []) {
    if (list.length === 0) return result;

    // removes current anagram
    const current = list[0];
    list = list.slice(1, list.length);
    result = [...result, current];

    list.forEach((word, index) => {
        if (isAnagram(current, word)) {
            // removes anagrams from the list
            list = [...list.slice(0, index), ...list.slice(index + 1, list.length)];
        }
    });

    return filterAnagrams(list, result);
}

module.exports = {
    removeCharAtIndex,
    isAnagram,
    filterAnagrams
}