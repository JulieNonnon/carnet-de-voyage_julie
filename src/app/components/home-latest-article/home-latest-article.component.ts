import { Component } from '@angular/core';
import { IArticle, ARTICLES } from 'src/app/Mocks/article';

@Component({
  selector: 'app-home-latest-article',
  templateUrl: './home-latest-article.component.html',
  styleUrls: ['./home-latest-article.component.css']
})
export class HomeLatestArticleComponent {

// Pour affichage du dernier article consulté !

Articles: IArticle = ARTICLES[ARTICLES.length-1];



}
