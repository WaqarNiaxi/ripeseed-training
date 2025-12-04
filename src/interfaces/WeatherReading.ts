interface WeatherReading {
 date: Date;
 highTemp: number;
 lowTemp: number;
 humidity: number;
}
interface YearlyReport {
 highestTemp: { value: number; date: Date };
 lowestTemp: { value: number; date: Date };
 mostHumidDay: { value: number; date: Date };
}
interface MonthlyAverage {
 avgHighTemp: number;
 avgLowTemp: number;
 avgHumidity: number;
}