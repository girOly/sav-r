// Run this file from node to test parsing function, data can be fed to the parser from imports. Imports are arrays and are generated from api call results.

const textParser = require("../services/text-parser");
const hM = require("./test_data/hM");
const iga = require("./test_data/iga");
const ikea = require("./test_data/ikea");
const loblaws = require("./test_data/loblaws");
const metro = require("./test_data/metro");
const walmart = require("./test_data/walmart");
const { timHortons, timHortons2 } = require("./test_data/timHortons");

console.log("=====================");
console.log(textParser(hM));
console.log("expect: 35.00");
console.log("=====================");
console.log(textParser(iga));
console.log("expect: 16.52");
console.log("=====================");
console.log(textParser(ikea));
console.log("expect: 494.40");
console.log("=====================");
console.log(textParser(loblaws));
console.log("expect: 7.77");
console.log("=====================");
console.log(textParser(timHortons));
console.log("expect: 5.39");
// ----------------------------------------------------------------------------
// textParser(ikea);
// textParser(loblaws);  // let cleanedNumbers = [];
// for (string of textArray) {
//   if (string.includes(".")) {
//     cleanedNumbers.push(string);
//   }
// }
// let validateIsNumber = [];
// for (string of cleanedNumbers) {
//   // console.log(Number.isInteger(string.charAt[3]));
//   let noCash = string.replace("$", "");
//   let noComa = noCash.replace(",", "");
//   // console.log(noComa);
//   // console.log(Number.isInteger(noComa));
//
//   function isInt(n) {
//     return n % 1 === 0;
//   }
//
//   function isFloat(n) {
//     return Number(n) === n && n % 1 !== 0;
//   }
//
//   console.log(isFloat(noComa));
// }
// textParser(metro);
// textParser(walmart);
// textParser(timHortons);
// textParser(timHortons2);
