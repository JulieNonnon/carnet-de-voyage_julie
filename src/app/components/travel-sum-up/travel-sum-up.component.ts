import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-sum-up',
  templateUrl: './travel-sum-up.component.html',
  styleUrls: ['./travel-sum-up.component.css']
})
export class TravelSumUpComponent {

  Articles: IArticle = ARTICLES[ARTICLES.length-1];

}
