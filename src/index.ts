import { CsvReader } from './CsvReader';

const Reader = new CsvReader('football.csv');
// remerber to fire the function
Reader.read();

//enum = enumeration
enum MatchResults {
    AwayWin = 'A',
    HomeWin = 'H',
    Draw = 'D'
}

let manUnitedWins = 0;
for (let match of Reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`the Man United wind ${manUnitedWins} games`);
