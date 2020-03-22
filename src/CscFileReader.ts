import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    // the variable will be passed in
    constructor(public filename: string) {}

    // the method to extract the data
    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n') //split the row data into row
            .map((row: string): string[] => row.split(',')); //split each row into string
    }
}
