import { CsvReader } from './CsvReader';
import { MatchResults } from './MatchResults';
import { dateStringToDate } from './utils';
// tuple annotation

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResults, // the row[5] is either A, H OR D in enum file
            row[6]
        ];
    }
}
