const anagram = require("../easy/anagram");

describe("anagram", () => {
  test("should return true if the given strings are anagrams", () => {
    expect(anagram("listen", "silent")).toBe(true);
  });

  test("should return false if the given strings are not anagrams", () => {
    expect(anagram("hello", "world")).toBe(false);
  });

  test("should ignore case when checking for anagrams", () => {
    expect(anagram("Debit card", "Bad credit")).toBe(true);
  });

  test("should ignore leading and trailing whitespace", () => {
    expect(anagram("  listen", "silent  ")).toBe(true);
  });
});
