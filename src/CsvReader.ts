import fs from 'fs';

export class CsvReader {
    // the main key to save the value
    data: string[][] = [];

    // the variable will be passed in
    constructor(public filename: string) {}

    // the method to extract the data
    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','));
    }
}
