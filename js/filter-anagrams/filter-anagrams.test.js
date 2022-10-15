const { isAnagram, filterAnagrams, removeCharAtIndex } = require("./filter-anagrams");

describe("filter-anagrams", () => {

    test("removes a char in a string", () => {
        expect(removeCharAtIndex("abc", 0)).toBe("bc");
        expect(removeCharAtIndex("abc", 1)).toBe("ac");
        expect(removeCharAtIndex("abc", 2)).toBe("ab");
    });

    test("checks if a word word is an anagram of another word", () => {
        expect(isAnagram("code", "code")).toBe(false);
        expect(isAnagram("code", "deco")).toBe(true);
        expect(isAnagram("code", "fun")).toBe(false);
    });

    test("it filters the anagrams from the list", () => {
        const words = ["code", "fun", "unf", "deco"];
        expect(filterAnagrams(words)).toStrictEqual(["code", "fun"]);
    });

});