import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export interface LocationResponse {

  address: string;
  currentConditions: {
    temp: number;
  }
}


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  // Déclaration des paramètres suivants: URL de l'API et le Token

  weatherApiUrl = environment.weatherApi.url;
  token = environment.weatherApi.token;

  constructor(private http: HttpClient) { }


  getLocation(): Observable<LocationResponse> {
    const url = `${this.weatherApiUrl}/el%20jem/today?unitGroup=metric&key=${this.token}&contentType=json`

    return this.http.get<LocationResponse>(url);  
    

}


}
