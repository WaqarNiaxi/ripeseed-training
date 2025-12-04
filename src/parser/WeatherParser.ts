// WeatherParser.ts
var fs = require("fs");
var path = require("path");

const filePath = path.join(
  __dirname,
  "../../public/weatherfiles/Murree_weather_2004_Aug.txt"
);

const dataParser = (year: string): any[] | undefined => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split(/\n/);
    var formatedData: any[] = [];
    if (lines.length === 0) return;

    for (const line of lines) {
      if (line.trim() === "") continue; 
      formatedData.push(line.split(","));
    }

    const keys = formatedData.shift();

    const formatted = formatedData.reduce((agg, arr) => {
      agg.push(
        arr.reduce((obj: any, item: string, index: number) => {
          obj[keys[index]] = item;
          return obj;
        }, {})
      );
      return agg;
    }, []);
    console.log(formatted[0]);


    return formatedData;
  } catch (err) {
    console.error("Error reading file:", err);
    return;
  }
};

module.exports = dataParser;
