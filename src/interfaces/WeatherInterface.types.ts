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



export interface WeatherData {
  PKT: string;

  MaxTemperatureC: number | null;
  MeanTemperatureC: number | null;
  MinTemperatureC: number | null;

  DewPointC: number | null;
  MeanDewPointC: number | null;
  MinDewpointC: number | null;

  MaxHumidity: number | null;
  MeanHumidity: number | null;
  MinHumidity: number | null;

  MaxSeaLevelPressurehPa: number | null;
  MeanSeaLevelPressurehPa: number | null;
  MinSeaLevelPressurehPa: number | null;

  MaxVisibilityKm: number | null;
  MeanVisibilityKm: number | null;
  MinVisibilitykM: number | null;

  MaxWindSpeedKmH: number | null;
  MeanWindSpeedKmH: number | null;
  MaxGustSpeedKmH: number | null;

  Precipitationmm: number | null;
  CloudCover: number | null;

  Events: string | null;
  WindDirDegrees: number | null;
}
