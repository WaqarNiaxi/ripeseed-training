"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "../public/weatherfiles/Murree_weather_2004_Aug.txt");
try {
    var content = fs.readFileSync(filePath, "utf-8");
    console.log(content);
}
catch (err) {
    console.error("Error reading file:", err);
}
