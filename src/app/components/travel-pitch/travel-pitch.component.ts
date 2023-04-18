import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-pitch',
  templateUrl: './travel-pitch.component.html',
  styleUrls: ['./travel-pitch.component.css']
})
export class TravelPitchComponent {

  Articles: IArticle = ARTICLES[ARTICLES.length-1];

}
