const yearlyReport = require("./src/report/yearlyExtremesReport");
const monthlyAverageReport = require("./src/report/monthlyAverageReport");
const monthlyChartReport = require("./src/report/monthlyChartReport");
const formatDate = require("./src/helper/common");
import type { ChartReport } from "./src/interfaces/WeatherInterface.types";


const args = process.argv.slice(2);
const dataDir = args[0];
const flags = args.slice(1);

if (!dataDir) {
  console.error("Error: Please provide a data directory path.");
  process.exit(1);
}

let yearlyFlag = null;
let monthlyAvgFlag = null;
let monthlyChartFlag = null;

 
// Loop through flags
for (let i = 0; i < flags.length; i++) {
  switch (flags[i]) {
    case "-e": {
      
     
      yearlyFlag = flags[i + 1];
      let resultYearly = yearlyReport(dataDir, yearlyFlag);
      console.log(
        `\nHighest: ${resultYearly.highestTemp.value}C on ${formatDate(
          resultYearly.highestTemp.date
        )} \nLowest: ${resultYearly.lowestTemp.value}C on ${formatDate(
          resultYearly.lowestTemp.date
        )} \nHumidity: ${resultYearly.mostHumidDay.value}% on ${formatDate(
          resultYearly.mostHumidDay.date
        )} \n`
      );

      

      i++;
      break;
    }

    case "-a": {
      
      
      monthlyAvgFlag = flags[i + 1];
      let resultAverage = monthlyAverageReport(dataDir, monthlyAvgFlag);
      console.log(resultAverage);
      i++;
      break;
    }

    case "-c": {
      monthlyChartFlag = flags[i + 1];
      let resultChart:ChartReport[] = monthlyChartReport(dataDir, monthlyChartFlag);

      if(flags.length==2){
      resultChart.forEach((item) => {
        let highBar = "+".repeat(item.highTemperature);
        console.log(
          `${item.lowTemperature} ${highBar} ${item.highTemperature}C`
        );
      });}

      else{
        if(flags.length>2)
           console.log("date highTemp lowTemp humidity")
          resultChart.forEach((item,index:number) => {
        console.log(
          `${monthlyChartFlag}/${index+1} ${item.highTemperature} ${item.lowTemperature} ${item.meanHumidity}`
        );
      })
      }
      i++;
      break;
    }

    default:
      // Ignore unknown flags
      break;
  }
}
