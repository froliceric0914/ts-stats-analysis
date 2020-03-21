"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvReader = /** @class */ (function () {
    // the variable will be passed in
    function CsvReader(filename) {
        this.filename = filename;
        // the main key to save the value
        this.data = [];
    }
    // the method to extract the data
    CsvReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n') //split the row data into row
            .map(function (row) { return row.split(','); }) //split each row into string
            .map(this.parseRow);
    };
    CsvReader.prototype.parseRow = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    return CsvReader;
}());
exports.CsvReader = CsvReader;
