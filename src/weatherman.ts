var dataParserFun = require("./parser/WeatherParser")




const args = process.argv.slice(2);
  console.log(args);

let data=dataParserFun(args[0])
 
