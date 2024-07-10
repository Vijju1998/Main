/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function anagram(str1, str2) {
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();
  if (str1.length != str2.length) {
    return false;
  }
  let charObj = {};
  for (let char of str1) {
    charObj[char] = (charObj[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charObj[char]) {
      return false;
    } else {
      charObj[char]--;
    }
  }
  return true;
}

module.exports = anagram;
