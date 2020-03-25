import { dateStringToDate } from './utils';
// import {MatchData} from
interface DataReader {
    read(): void;
    data: string[][];
}

// tuple annotation

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResults, // the row[5] is either A, H OR D in enum file
                row[6]
            ]
        );
    }

    // mapRow(row: string[]): MatchData {
    //
    // }
}
