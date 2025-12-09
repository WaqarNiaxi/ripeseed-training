export interface WeatherReading {
 date: Date;
 highTemp: number;
 lowTemp: number;
 humidity: number;
}
export interface YearlyReport {
 highestTemp: { value: number|null; date: Date |null};
 lowestTemp: { value: number|null; date: Date |null};
 mostHumidDay: { value: number|null; date: Date |null};
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

export interface ReportFunction{
    dir:number,
    value:number, 
    tota?:number
}


export interface MonthlyAverageData{
    MaxTemperatureC:number|null|undefined,
    MinTemperatureC:number|null|undefined,
    MeanHumidity:number|null|undefined
}
