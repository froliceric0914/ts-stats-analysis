import { MatchReader } from './MatchReader';

import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');

const matchesReader = MatchReader.fromCsv('football.csv');

matchesReader.load();
// remerber to fire the function

let Reader = matchesReader.matches;
console.log(matchesReader.matches);

const summary = Summary.generateHtmlReport('Man United');

summary.buildAndPrintReport(matchesReader.matches);
