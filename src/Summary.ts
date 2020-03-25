import { MatchData } from './MatchData';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(
        public analyzer: Analyzer,
        public outputResults: OutputTarget
    ) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputResults.print(output);
    }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());
