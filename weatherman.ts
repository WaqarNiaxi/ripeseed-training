"use strict";

const yearlyReport = require("./src/report/yearlyExtremesReport");
const monthlyAverageReport = require("./src/report/monthlyAverageReport");
const monthlyChartReport = require("./src/report/monthlyChartReport");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .option("extremes", { alias: ["e"]})
  .option("chart", { alias: ["c"]})
  .option("average", { alias: ["a"]})
  .parse();


let dirPath=argv._[0];

if (argv.extremes) {
  yearlyReport(dirPath, argv.extremes);
}

if (argv.chart) {
  monthlyChartReport(dirPath, argv.chart, Object.keys(argv).length);
}

if (argv.average) {
  monthlyAverageReport(dirPath, argv.average);
}
