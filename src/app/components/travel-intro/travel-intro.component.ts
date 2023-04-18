import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-intro',
  templateUrl: './travel-intro.component.html',
  styleUrls: ['./travel-intro.component.css']
})
export class TravelIntroComponent {

  Articles: IArticle = ARTICLES[ARTICLES.length-1];

}
