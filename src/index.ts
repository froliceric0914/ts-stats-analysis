import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';

const Reader = new MatchReader('football.csv');
// remerber to fire the function
Reader.read();
console.log(Reader.data);

//enum = enumeration

let manUnitedWins = 0;
for (let match of Reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`the Man United wind ${manUnitedWins} games`);
