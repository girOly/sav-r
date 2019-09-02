// Run this file from node to test parsing function, data can be fed to the parser from imports. Imports are arrays and are generated from api call results.

const textParser = require("../services/text-parser");

const hM = require("./test_data/hM");
const iga = require("./test_data/iga");
const ikea = require("./test_data/ikea");
const loblaws = require("./test_data/loblaws");
const metro = require("./test_data/metro");
const walmart = require("./test_data/walmart");
const { timHortons, timHortons2 } = require("./test_data/timHortons");

textParser(hM);
textParser(iga);
// textParser(ikea);
// textParser(loblaws);
// textParser(metro);
// textParser(walmart);
// textParser(timHortons);
// textParser(timHortons2);
