/**
 * @param {string} s
 * @return {number}
 *
 */

console.log("The html and js are connected");
var romanToInt = function(s) {
  ///i need a function that tests whether
  //I comes before V or X
  //X  comes before L or C
  //C comes before D or M
  //s.search("I") does the same thing i did before (searches for the first occurance) but more elegantly and if it's not there it will give us -1 which I need
  //   console.log(s.search("I") + " for " + s);
  //   // s.lastIndexOf("letter") does that I was doing before (finds the last occurance of the letter I am looking for) but without the hassle
  //   console.log(s.lastIndexOf("I"));
  let sum = 0;
  let firstI = s.search("I"); //because I will forget what it's doing if I don't label it
  let firstV = s.search("V");
  let firstX = s.search("X");
  let firstL = s.search("L");
  let firstC = s.search("C");
  let firstD = s.search("D");
  let firstM = s.search("M");
  let lastI = s.lastIndexOf("I");
  let lastV = s.lastIndexOf("V");
  let lastX = s.lastIndexOf("X");
  let lastL = s.lastIndexOf("L");
  let lastC = s.lastIndexOf("C");
  let lastD = s.lastIndexOf("D");
  let lastM = s.lastIndexOf("M");
  //for the last one, we still need 1900 so 1000 + (1000-100)
  // so M + CM
  // console.log(" For " + s + " the first M is at index " + firstM);
  // console.log(" the last M is at index " + lastM);
  // // console.log("///////////////////");
  // console.log(" the first D is at " + firstD);
  // console.log(" the last D is at " + lastD);
  // // console.log("//////////////////////");
  // console.log(" the first C is at " + firstC);
  // console.log(" the last C is at " + lastC);
  // // console.log("//////////////////");
  // console.log(" the first L is at " + firstL);
  // console.log(" the last L is at " + lastL);
  // console.log("//////");
  // console.log("//////");

  console.log(firstX - firstI === 1);
  console.log(firstX - lastI === 1);
  console.log(lastX - firstI === 1);
  console.log(lastX - lastI === 1);

  //creating condition where I can add everything easily
  //if no I's come before X or V

  return sum;
};

// console.log(romanToInt("III") + " should be 3");
// console.log(romanToInt("IV") + " should be 4");
// console.log(romanToInt("IX") + " should be 9");
console.log(romanToInt("LVIII") + " should be 58");
console.log(romanToInt("MCMXCIV") + " should be 1994");
console.log(romanToInt("CD") + " should be 400");
console.log(romanToInt("XIX") + "should be 19");
// console.log(romanToInt("XV") + " should be 15");

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
