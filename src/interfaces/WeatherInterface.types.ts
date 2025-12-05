export interface WeatherReading {
 date: Date;
 highTemp: number;
 lowTemp: number;
 humidity: number;
}
export interface YearlyReport {
 highestTemp: { value: number; date: Date };
 lowestTemp: { value: number; date: Date };
 mostHumidDay: { value: number; date: Date };
}
export interface MonthlyAverage {
 avgHighTemp: number;
 avgLowTemp: number;
 avgHumidity: number;
}
export interface ChartReport{
highTemperature:number,
lowTemperature:number,
meanHumidity:number,
}

