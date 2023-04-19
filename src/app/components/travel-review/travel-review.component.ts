import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-review',
  templateUrl: './travel-review.component.html',
  styleUrls: ['./travel-review.component.css']
})
export class TravelReviewComponent {

  Articles: IArticle = ARTICLES[ARTICLES.length-1];

}
