
const monthlyAverageCaculator = require("../calculator/monthlyAverageCalculator");
import type { MonthlyAverage } from "../interfaces/WeatherInterface.types";


let monthlyAverageReport = (dataDir: string, monthlyAvgFlag: string) :MonthlyAverage=> {
 let resultAverage= monthlyAverageCaculator(dataDir,monthlyAvgFlag);
 console.log(resultAverage);
  return resultAverage
}


module.exports = monthlyAverageReport;
