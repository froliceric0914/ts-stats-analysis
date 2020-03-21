import fs from 'fs';

// this is a reusable Generic Class
export abstract class CsvReader<T> {
    // the main key to save the value
    data: T[] = [];

    // the variable will be passed in
    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;
    // the method to extract the data
    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n') //split the row data into row
            .map((row: string): string[] => row.split(',')) //split each row into string
            .map(this.mapRow);
    }
}
