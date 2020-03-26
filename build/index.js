"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv');
var matchesReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchesReader.load();
// remerber to fire the function
var Reader = matchesReader.matches;
console.log(matchesReader.matches);
var summary = Summary_1.Summary.generateHtmlReport('Man United');
summary.buildAndPrintReport(matchesReader.matches);
