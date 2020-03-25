"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputResults) {
        this.analyzer = analyzer;
        this.outputResults = outputResults;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputResults.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport());
