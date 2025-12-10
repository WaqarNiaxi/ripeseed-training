const dataParser = require("../parser/weatherParser");
const { getFileDataByMonth } = require("../helper/common");
import type {
  MonthlyAverage,
  MonthlyAverageData,
} from "../interfaces/WeatherInterface.types";

const monthlyAverageCalculator = (
  dataDir: string,
  monthlyAvgFlag: string
): MonthlyAverage => {
  const data: MonthlyAverageData[] = getFileDataByMonth(
    dataDir,
    monthlyAvgFlag,
    dataParser
  );

  if (data.length === 0) {
    return {
      avgHighTemp: 0,
      avgLowTemp: 0,
      avgHumidity: 0,
    };
  }


  const acc = { totalMax: 0, totalMin: 0, totalHumidity: 0 };

  for (const item of data) {
    acc.totalMax += item.MaxTemperatureC ?? 0;
    acc.totalMin += item.MinTemperatureC ?? 0;
    acc.totalHumidity += item.MeanHumidity ?? 0;
  }

  const { totalMax, totalMin, totalHumidity } = acc;

  const length = data.length;

  return {
    avgHighTemp: Math.round(totalMax / length),
    avgLowTemp: Math.round(totalMin / length),
    avgHumidity: Math.round(totalHumidity / length),
  };
};

module.exports = monthlyAverageCalculator;
