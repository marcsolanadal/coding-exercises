const { reverse, reverseImproved } = require("./reverse-string");

describe("reverse()", () => {
    test("reverses a given string", () => {
        expect(reverse("hello")).toBe("olleh");
        expect(reverse("hello world!")).toBe("!dlrow olleh");
    });
});

describe("reverseImproved()", () => {
    test("reverses a given string", () => {
        expect(reverseImproved("hello")).toBe("olleh");
        expect(reverseImproved("hello world!")).toBe("!dlrow olleh");
    });
});