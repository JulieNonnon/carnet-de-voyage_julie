import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-home-other-articles',
  templateUrl: './home-other-articles.component.html',
  styleUrls: ['./home-other-articles.component.css']
})
export class HomeOtherArticlesComponent {

  Articles: IArticle[] = ARTICLES;

}
