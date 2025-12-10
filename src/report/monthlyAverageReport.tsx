
const monthlyAverageCaculator = require("../calculator/monthlyAverageCalculator");
import type { MonthlyAverage ,WeatherData} from "../interfaces/WeatherInterface.types";


let monthlyAverageReport = (data:WeatherData[]) :void=> {
 let resultAverage= monthlyAverageCaculator(data);
 console.log(resultAverage);
}


module.exports = monthlyAverageReport;
