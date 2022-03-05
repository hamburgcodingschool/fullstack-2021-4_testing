const apple = require("../apple");

test("my first test", () => {
    const actual = 9;
    const expected = 9;

    expect(actual).toBe(expected);
});

test("my second test", () => {
    expect(2 + 2).toBe(4);
});

test("getSumOfApples", () => {
    const actual = apple.getSumOfApples(2, 2);
    
    expect(actual).toBe(4);
}); 