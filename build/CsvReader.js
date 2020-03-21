"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// this is a reusable Generic Class
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
            .map(this.mapRow);
    };
    return CsvReader;
}());
exports.CsvReader = CsvReader;
