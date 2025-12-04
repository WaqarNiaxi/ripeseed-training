const fs = require("fs");
const path = require("path");
const dataParser = require("../parser/weatherParser");
import type { MonthlyAverage } from "../interfaces/WeatherInterface.types";

let monthlyAverageCaculator = (
  dataDir: string,
  monthlyAvgFlag: string
): MonthlyAverage => {
  console.log(dataDir, monthlyAvgFlag);
  let yearAndDate = monthlyAvgFlag.split("/");
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let selectedMonthAndYear = `${yearAndDate[0]}_${
    months[Number(yearAndDate[1]) - 1]
  }`;

  // Create full directoryPath
  const directoryPath = path.join("public", dataDir);
  const files = fs.readdirSync(directoryPath);

  const fileName = files.filter((file) => file.includes(selectedMonthAndYear));
  const data = dataParser(directoryPath + "/" + fileName);

  let totalMaxTemperatureC = 0;
  let totalMinTemperatureC = 0;
  let totalMeanHumidity = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].MaxTemperatureC != null) {
      totalMaxTemperatureC = totalMaxTemperatureC + data[i].MaxTemperatureC;
    }
    if (data[i].MinTemperatureC != null) {
      totalMinTemperatureC = totalMinTemperatureC + data[i].MinTemperatureC;
    }
    if (data[i].MeanHumidity != null) {
      totalMeanHumidity = totalMeanHumidity + data[i].MeanHumidity;
    }
  }

 

  return {
    avgHighTemp: Math.round(totalMaxTemperatureC / data.length),
    avgLowTemp: Math.round(totalMinTemperatureC / data.length),
    avgHumidity: Math.round(totalMeanHumidity / data.length),
  };
};

module.exports = monthlyAverageCaculator;
