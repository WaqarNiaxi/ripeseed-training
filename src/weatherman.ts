const yearlyReport = require("./report/yearlyExtremesReport")
const monthlyAverageReport = require('./report/monthlyAverageReport')
const formatDate = require("./helper/common");


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
    case "-e":   
      yearlyFlag = flags[i + 1]; 
        let output = yearlyReport(dataDir,yearlyFlag)
        console.log(`Highest: ${output.highestTemp.value}C on ${formatDate(output.highestTemp.date)} \nLowest: ${output.lowestTemp.value}C on ${formatDate(output.lowestTemp.date)} \nHumidity: ${output.mostHumidDay.value}% on ${formatDate(output.mostHumidDay.date)}`)
      i++;
      break;

    case "-a":   
      monthlyAvgFlag = flags[i + 1];
      let result= monthlyAverageReport(dataDir,monthlyAvgFlag)
      console.log(result)
      i++;
      break;

    case "-c":  
      monthlyChartFlag = flags[i + 1];
      i++;
      break;

    default:
      // Ignore unknown flags
      break;
  }
}


