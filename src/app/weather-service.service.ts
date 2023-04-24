import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherReport(city: string) {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7fba1aa43102a6e126976147e0d3d2ec")
  }

  getForecastReport(city: string) {
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7fba1aa43102a6e126976147e0d3d2ec")
  }
}
