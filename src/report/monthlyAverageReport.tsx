
const monthlyAverageCaculator = require("../calculator/weatherMonthlyAverageCalculator");
import type { MonthlyAverage } from "../interfaces/WeatherInterface.types";


let monthlyAverageReport = (dataDir: string, monthlyAvgFlag: string) :MonthlyAverage=> {

 
  return monthlyAverageCaculator(dataDir,monthlyAvgFlag)

}


module.exports = monthlyAverageReport;
