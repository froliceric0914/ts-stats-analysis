import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CscFileReader';
import { MatchResults } from './MatchResults';

const csvFileReader = new CsvFileReader('football.csv');

const matchesReader = new MatchReader(csvFileReader);

matchesReader.load();
// remerber to fire the function

let Reader = matchesReader.matches;
console.log(matchesReader.matches);

//enum = enumeration

let manUnitedWins = 0;
for (let match of matchesReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`the Man United wind ${manUnitedWins} games`);
