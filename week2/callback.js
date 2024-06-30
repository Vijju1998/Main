// callback

const square = a => a*a;
const cube = a => a * a *  a;
const sumOfNumbers = (a,b,callbackFn) => callbackFn(a) + callbackFn(b);

const sumOfSquare = sumOfNumbers(2,3,square);
console.log("Sum of Square",sumOfSquare);
const sumOfCube = sumOfNumbers(2,3,cube);
console.log("Sum of cube",sumOfCube);