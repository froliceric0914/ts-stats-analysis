"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var MatchResults_1 = require("./MatchResults");
var Reader = new CsvReader_1.CsvReader('football.csv');
// remerber to fire the function
Reader.read();
console.log(Reader.data);
//enum = enumeration
var manUnitedWins = 0;
for (var _i = 0, _a = Reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("the Man United wind " + manUnitedWins + " games");
