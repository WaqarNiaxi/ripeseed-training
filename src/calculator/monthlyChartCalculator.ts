const dataParser = require("../parser/weatherParser");
import type { ChartReport } from "../interfaces/WeatherInterface.types";
const { getFileDataByMonth } = require("../helper/common");

let monthlyChartCaculator = (
  dataDir: string,
  monthlyAvgFlag: string
): ChartReport[] => {
  const data: Array<ChartReport> = getFileDataByMonth(
    dataDir,
    monthlyAvgFlag,
    dataParser
  );

  return data.map((item: any) => ({
    highTemperature: item.MaxTemperatureC,
    lowTemperature: item.MinTemperatureC,
    meanHumidity: item.MeanHumidity,
  }));
};

module.exports = monthlyChartCaculator;
