"use strict";

const yearlyReport = require("./src/report/yearlyExtremesReport");
const monthlyAverageReport = require("./src/report/monthlyAverageReport");
const monthlyChartReport = require("./src/report/monthlyChartReport");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).parse();

if (argv.e) {
  yearlyReport(argv._[0], argv.e);
}

if (argv.c) {
  monthlyChartReport(argv._[0], argv.c, Object.keys(argv).length);
}

if (argv.a) {
  monthlyAverageReport(argv._[0], argv.a);
}
