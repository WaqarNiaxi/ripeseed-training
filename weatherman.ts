"use strict";

const yearlyReport = require("./src/report/yearlyExtremesReport");
const monthlyAverageReport = require("./src/report/monthlyAverageReport");
const monthlyChartReport = require("./src/report/monthlyChartReport");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const dataParser = require("./src/parser/weatherParser");
const { getFileDataByMonth, yearlyData } = require("./src/helper/common");
import type {
  WeatherData
} from "./src/interfaces/WeatherInterface.types";

const argv = yargs(hideBin(process.argv))
  .option("extremes", { alias: ["e"]})
  .option("chart", { alias: ["c"]})
  .option("average", { alias: ["a"]})
  .parse();


let dirPath=argv._[0];

//  Yearly Extremes (-e flag)
if (argv.extremes) {

  const data:WeatherData[] = yearlyData(
    dirPath,
    argv.extremes,
    dataParser
  );

  yearlyReport(data);
}

// Monthly Charts (-c flag)
if (argv.chart) {

  const data: Array<WeatherData> = getFileDataByMonth(
    dirPath,
    argv.chart,
    dataParser
  );
  monthlyChartReport(data,argv.chart, Object.keys(argv).length);
}

//  Monthly Averages (-a flag)
if (argv.average) {

  const data: Array<WeatherData> = getFileDataByMonth(
    dirPath,
    argv.average,
    dataParser
  );

  monthlyAverageReport(data);
}
