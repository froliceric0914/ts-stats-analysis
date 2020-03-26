"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport_1 = require("./HtmlReport");
var WinsAnalysis_1 = require("./analysis/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputResults) {
        this.analyzer = analyzer;
        this.outputResults = outputResults;
    }
    Summary.generateHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    // take in the result and print out by the outputResult api
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputResults.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport());
