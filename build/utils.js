"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParse = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
