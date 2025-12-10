
const monthlyAverageCaculator = require("../calculator/monthlyAverageCalculator");
import type { MonthlyAverage ,WeatherData} from "../interfaces/WeatherInterface.types";


let monthlyAverageReport = (data:WeatherData[]) :MonthlyAverage=> {
 let resultAverage= monthlyAverageCaculator(data);
 console.log(resultAverage);
  return resultAverage
}


module.exports = monthlyAverageReport;
