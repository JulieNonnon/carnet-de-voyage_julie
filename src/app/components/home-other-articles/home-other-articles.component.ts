import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLES, IArticle } from 'src/app/Mocks/article';

@Component({
  selector: 'app-home-other-articles',
  templateUrl: './home-other-articles.component.html',
  styleUrls: ['./home-other-articles.component.css']
})
export class HomeOtherArticlesComponent {

  Articles: IArticle[] = ARTICLES;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.Articles = ARTICLES.filter(article => article.id === Number(id));

    this.Articles = ARTICLES.filter(article => !article.isLatest);
  }


}
