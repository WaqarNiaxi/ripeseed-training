const weatherYearlyCalculator = require("../calculator/yearlyCalculator");
const { formatDate } = require("../helper/common");
import type { YearlyReport } from "../interfaces/WeatherInterface.types";

let yearlyReport = (dataDir: string, yearlyFlag: string): YearlyReport => {
  let resultYearly = weatherYearlyCalculator(dataDir, yearlyFlag);

  console.log(
    `\nHighest: ${resultYearly.highestTemp.value}C on ${formatDate(
      resultYearly.highestTemp.date
    )} \nLowest: ${resultYearly.lowestTemp.value}C on ${formatDate(
      resultYearly.lowestTemp.date
    )} \nHumidity: ${resultYearly.mostHumidDay.value}% on ${formatDate(
      resultYearly.mostHumidDay.date
    )} \n`
  );

  return resultYearly;
};

module.exports = yearlyReport;
