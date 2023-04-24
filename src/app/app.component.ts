import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TeraWeather';
  cities: Array<string>;
  weatherData: any;
  forecastData: any;

  constructor(private apiData: WeatherServiceService) {
    this.cities =
      [
        "Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata", "Surat", "Jaipur", "Chandigarh", "Varanasi"
      ]

    this.forecastData = { list: [] }
  }

  getWeatherData(city: string) {
    this.apiData.getWeatherReport(city).subscribe((datas) => {
      this.weatherData = datas
    },(err)=>
    {
      console.log(err);
    })

    this.apiData.getForecastReport(city).subscribe((datas) => {
      this.forecastData = datas;
    },(err)=>
    {
      console.log(err);
    })
  }


}
