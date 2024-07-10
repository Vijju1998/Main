/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    const strLower = str.toLowerCase().replace(/[^a-z]/gi, "");
    let reverStr = "";
    for(let i = strLower.length -1; i>=0;i--){
        reverStr += strLower[i];
    }
    return strLower === reverStr ? true : false;
  }
  
  module.exports = isPalindrome;