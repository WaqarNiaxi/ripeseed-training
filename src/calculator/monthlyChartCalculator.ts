import type { ChartReport,WeatherData } from "../interfaces/WeatherInterface.types";

let monthlyChartCaculator = (
  data:WeatherData[],
): ChartReport[] => {
 

  let result = data.map((item: any) => ({
    highTemperature: item.MaxTemperatureC,
    lowTemperature: item.MinTemperatureC,
    meanHumidity: item.MeanHumidity,
  }));

  return result;
};

module.exports = monthlyChartCaculator;
