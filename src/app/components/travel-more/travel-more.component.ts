import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-more',
  templateUrl: './travel-more.component.html',
  styleUrls: ['./travel-more.component.css']
})
export class TravelMoreComponent {

  Articles: IArticle[] = ARTICLES;

}
