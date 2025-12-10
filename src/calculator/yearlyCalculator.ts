const dataParser = require("../parser/weatherParser");
import type { YearlyReport } from "../interfaces/WeatherInterface.types";
const { yearlyData } = require("../helper/common");

const yearlyCaculator = (
  dataDir: string,
  yearlyFlag: string
): YearlyReport => {
  const wholeData = yearlyData(dataDir, yearlyFlag, dataParser);

  const result = {
    highestTemp: { value: -Infinity, date: null as Date | null },
    lowestTemp:  { value: Infinity,  date: null as Date | null },
    mostHumidDay:{ value: -Infinity, date: null as Date | null },
  };

  for (const item of wholeData) {
    const date = new Date(item.PKT);

    const maxTemp = item.MaxTemperatureC ?? 0;
    const minTemp = item.MinTemperatureC ?? 0;
    const humidity = item.MaxHumidity ?? 0;

    if (maxTemp > result.highestTemp.value) {
      result.highestTemp = { value: maxTemp, date };
    }

    if (minTemp < result.lowestTemp.value) {
      result.lowestTemp = { value: minTemp, date };
    }

    if (humidity > result.mostHumidDay.value) {
      result.mostHumidDay = { value: humidity, date };
    }
  }

  return result;
};


module.exports = yearlyCaculator;
