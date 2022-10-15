const { reverse } = require("./reverse-string");

test("reverses a given string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("hello world!")).toBe("!dlrow olleh");
});