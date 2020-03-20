"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var Reader = new CsvReader_1.CsvReader('football.csv');
// remerber to fire the function
Reader.read();
//enum = enumeration
var MatchResults;
(function (MatchResults) {
    MatchResults["AwayWin"] = "A";
    MatchResults["HomeWin"] = "H";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = Reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("the Man United wind " + manUnitedWins + " games");
