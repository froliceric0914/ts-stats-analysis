import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CscFileReader';

import { ConsoleReport } from './reportTarget/ConsoleReport';
import { WinsAnalysis } from './analysis/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');

const matchesReader = new MatchReader(csvFileReader);

matchesReader.load();
// remerber to fire the function

let Reader = matchesReader.matches;
console.log(matchesReader.matches);

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

summary.buildAndPrintReport(matchesReader.matches);
