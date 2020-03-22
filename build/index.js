"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CscFileReader_1 = require("./CscFileReader");
var MatchResults_1 = require("./MatchResults");
var csvFileReader = new CscFileReader_1.CsvFileReader('football.csv');
var matchesReader = new MatchReader_1.MatchReader(csvFileReader);
matchesReader.load();
// remerber to fire the function
var Reader = matchesReader.matches;
console.log(matchesReader.matches);
//enum = enumeration
var manUnitedWins = 0;
for (var _i = 0, _a = matchesReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("the Man United wind " + manUnitedWins + " games");
