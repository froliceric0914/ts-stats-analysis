"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    // the variable will be passed in
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    // the method to extract the data
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n') //split the row data into row
            .map(function (row) { return row.split(','); }); //split each row into string
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
