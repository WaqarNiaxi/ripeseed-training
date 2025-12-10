"use strict";

const yearlyReport = require("./src/report/yearlyExtremesReport");
const monthlyAverageReport = require("./src/report/monthlyAverageReport");
const monthlyChartReport = require("./src/report/monthlyChartReport");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const dataParser = require("./src/parser/weatherParser");
const { getFileDataByMonth, yearlyData } = require("./src/helper/common");
import type { WeatherData } from "./src/interfaces/WeatherInterface.types";

const argv = yargs(hideBin(process.argv))
  .option("extremes", { alias: ["e"] })
  .option("chart", { alias: ["c"] })
  .option("average", { alias: ["a"] })
  .parse();

let dirPath = argv._[0];


function loadData(flagValue: string, isYearly: boolean): WeatherData[] {
  return isYearly
    ? yearlyData(dirPath, flagValue, dataParser)
    : getFileDataByMonth(dirPath, flagValue, dataParser);
}



if (argv.extremes) {
  const data = loadData(argv.extremes, true);
  yearlyReport(data);
}

if (argv.chart) {
  const data = loadData(argv.chart, false);
  monthlyChartReport(data, argv.chart, Object.keys(argv).length);
}

if (argv.average) {
  const data = loadData(argv.average, false);
  monthlyAverageReport(data);
}
