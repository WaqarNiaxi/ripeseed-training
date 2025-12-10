const weatherYearlyCalculator = require("../calculator/yearlyCalculator");
const { formatDate } = require("../helper/common");
import type { YearlyReport ,WeatherData} from "../interfaces/WeatherInterface.types";

let yearlyReport = (data:WeatherData[]): YearlyReport => {
  let resultYearly:YearlyReport = weatherYearlyCalculator(data);

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
