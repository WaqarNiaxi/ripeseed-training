const monthlyChartCaculator = require("../calculator/monthlyChartCalculator");
import type { ChartReport } from "../interfaces/WeatherInterface.types";

let monthlyChartReport = (
  dataDir: string,
  monthlyChartFlag: string,
  flagsLength: number
): ChartReport[] => {

  
  let resultChart: ChartReport[] = monthlyChartCaculator(
    dataDir,
    monthlyChartFlag
  );

  if (flagsLength == 3) {
    resultChart.forEach((item) => {
      let highBar = "+".repeat(item.highTemperature);
      console.log(`${item.lowTemperature} ${highBar} ${item.highTemperature}C`);
    });
  } else {
    if (flagsLength > 3) console.log("date highTemp lowTemp humidity");
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
