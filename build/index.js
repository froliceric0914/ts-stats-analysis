"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CscFileReader_1 = require("./CscFileReader");
var ConsoleReport_1 = require("./reportTarget/ConsoleReport");
var WinsAnalysis_1 = require("./analysis/WinsAnalysis");
var Summary_1 = require("./Summary");
var csvFileReader = new CscFileReader_1.CsvFileReader('football.csv');
var matchesReader = new MatchReader_1.MatchReader(csvFileReader);
matchesReader.load();
// remerber to fire the function
var Reader = matchesReader.matches;
console.log(matchesReader.matches);
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchesReader.matches);
