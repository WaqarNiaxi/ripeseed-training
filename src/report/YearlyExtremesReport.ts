
const weatherYearlyCalculator = require("../calculator/weatherYearlyCalculator");
import type { YearlyReport } from "../interfaces/WeatherInterface.types";


let yearlyReport = (dataDir: string, yearlyFlag: string) :YearlyReport=> {
   return  weatherYearlyCalculator(dataDir, yearlyFlag);

}

module.exports = yearlyReport;
