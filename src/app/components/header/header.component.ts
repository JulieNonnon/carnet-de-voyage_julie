import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  LocationResponse,
  WeatherService,
} from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  city?: LocationResponse;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getLocation().subscribe((city) => {
      this.city = city;

      console.log(this.city);
    });
  }
}
