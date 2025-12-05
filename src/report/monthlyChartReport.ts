

const monthlyChartCaculator = require("../calculator/weatherChartCalculator");
import type { ChartReport } from "../interfaces/WeatherInterface.types";



let monthlyChartReport = (dataDir: string, monthlyChartFlag: string):ChartReport[] => {
   return  monthlyChartCaculator(dataDir,monthlyChartFlag);

}

module.exports = monthlyChartReport;
