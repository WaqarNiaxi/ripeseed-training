const fs = require("fs");
const path = require("path");
const dataParser = require("../parser/weatherParser");
import type { YearlyReport } from "../interfaces/WeatherInterface.types";

let yearlyCaculator = (dataDir:string, yearlyFlag:string): YearlyReport => {
 
  const files = fs.readdirSync(dataDir);

  // Filter files
  const yearFiles = files.filter((file:string) => file.includes(yearlyFlag));

  let wholeData = [];
  for (let i = 0; i < yearFiles.length; i++) {
    wholeData.push(dataParser(dataDir + "/" + yearFiles[i]));
  }

  wholeData=wholeData.flat(Infinity);



const result = getWeatherStats(wholeData);

  return result;
};




function getWeatherStats(wholeData:any[]) {
  let highestTemp = null;
  let lowestTemp = null;
  let highestHumidity = null;

  let highestTempDate = new Date();
  let lowestTempDate = new Date();
  let highestHumidityDate = new Date();

  wholeData.forEach((item) => {
    
    if (item.MaxTemperatureC !== null) {
      if (highestTemp === null || item.MaxTemperatureC > highestTemp) {
        highestTemp = item.MaxTemperatureC;
        highestTempDate = new Date(item.PKT);
      }
    }

    
    if (item.MinTemperatureC !== null) {
      if (lowestTemp === null || item.MinTemperatureC < lowestTemp) {
        lowestTemp = item.MinTemperatureC;
        lowestTempDate = new Date(item.PKT);
      }
    }

    
    if (item.MaxHumidity !== null) {
      if (highestHumidity === null || item.MaxHumidity > highestHumidity) {
        highestHumidity = item.MaxHumidity;
        highestHumidityDate = new Date(item.PKT);
      }
    }
  });



  return {
    highestTemp: { value: highestTemp, date: highestTempDate },
    lowestTemp: { value: lowestTemp, date: lowestTempDate },
    mostHumidDay: { value: highestHumidity, date: highestHumidityDate }
  };
}

module.exports = yearlyCaculator;
