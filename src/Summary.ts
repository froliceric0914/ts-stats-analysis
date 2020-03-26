import { MatchData } from './MatchData';
import { HtmlReport } from './HtmlReport';
import { WinsAnalysis } from './analysis/WinsAnalysis';
//two general interface that needs to be implemented to the api
export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static generateHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }

    constructor(
        public analyzer: Analyzer,
        public outputResults: OutputTarget
    ) {}

    // take in the result and print out by the outputResult api
    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputResults.print(output);
    }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());
