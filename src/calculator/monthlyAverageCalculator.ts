const dataParser = require("../parser/weatherParser");
const { getFileDataByMonth } = require("../helper/common");
import type {
  MonthlyAverage,
  MonthlyAverageData,
} from "../interfaces/WeatherInterface.types";

let monthlyAverageCaculator = (
  dataDir: string,
  monthlyAvgFlag: string
): MonthlyAverage => {
  
  const data: Array<MonthlyAverageData> = getFileDataByMonth(
    dataDir,
    monthlyAvgFlag,
    dataParser
  );

  let totalMaxTemperatureC: number = 0;
  let totalMinTemperatureC: number = 0;
  let totalMeanHumidity: number = 0;



    data.forEach((item)=>{

    if (item.MaxTemperatureC != null) {
      totalMaxTemperatureC += item.MaxTemperatureC;
    }

    if (item.MinTemperatureC != null) {
      totalMinTemperatureC += item.MinTemperatureC;
    }

    if (item.MeanHumidity != null) {
      totalMeanHumidity += item.MeanHumidity;
    }
  })
    

  return {
    avgHighTemp: Math.round(totalMaxTemperatureC / data.length),
    avgLowTemp: Math.round(totalMinTemperatureC / data.length),
    avgHumidity: Math.round(totalMeanHumidity / data.length),
  };
};

module.exports = monthlyAverageCaculator;
