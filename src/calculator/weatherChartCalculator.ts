const fs = require("fs");
const path = require("path");
const dataParser = require("../parser/weatherParser");
import type { ChartReport } from "../interfaces/WeatherInterface.types";

let monthlyChartCaculator = (
  dataDir: string,
  monthlyAvgFlag: string
): ChartReport[] => {
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


  const files = fs.readdirSync(dataDir);

  const fileName = files.filter((file) => file.includes(selectedMonthAndYear));
  const data = dataParser(dataDir + "/" + fileName);

  let result=[];

  for (let i = 0; i < data.length; i++) {
     let obj={};
     obj["highTemperature"]=data[i].MaxTemperatureC;
     obj["lowTemperature"]=data[i].MinTemperatureC;
     obj["meanHumidity"]=data[i].MeanHumidity;
     result.push(obj)
  }


  return result;
};

module.exports = monthlyChartCaculator;
