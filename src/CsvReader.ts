import fs from 'fs';

import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResults';

// tuple annotation
type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvReader {
    // the main key to save the value
    data: MatchData[] = [];

    // the variable will be passed in
    constructor(public filename: string) {}

    // the method to extract the data
    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n') //split the row data into row
            .map((row: string): string[] => row.split(',')) //split each row into string
            .map(this.parseRow);
    }
    parseRow(row: string[]): MatchData {
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
