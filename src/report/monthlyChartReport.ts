const monthlyChartCaculator = require("../calculator/monthlyChartCalculator");
import type { ChartReport ,WeatherData} from "../interfaces/WeatherInterface.types";

let monthlyChartReport = (
  data:WeatherData[],
  monthlyChartFlag:number,
  flagsLength: number
): ChartReport[] => {

  
  let resultChart: ChartReport[] = monthlyChartCaculator(
    data
  );
  
  if (flagsLength == 4) {
    resultChart.forEach((item) => {
      let highBar = "+".repeat(item.highTemperature);
      console.log(`${item.lowTemperature} ${highBar} ${item.highTemperature}C`);
    });
  } else {
    if (flagsLength > 4) console.log("date highTemp lowTemp humidity");
    resultChart.forEach((item, index: number) => {
      console.log(
        `${monthlyChartFlag}/${index + 1} ${item.highTemperature} ${
          item.lowTemperature
        } ${item.meanHumidity}`
      );
    });
  }

  return resultChart;
};

module.exports = monthlyChartReport;
