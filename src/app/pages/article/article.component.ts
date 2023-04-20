import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IArticle, ARTICLES } from 'src/app/Mocks/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

// tableau de mon mock:
Articles: IArticle[] = ARTICLES;

// propriété article:
articleInfo?: IArticle;


// Configuration de la navigation dans le constructeur:
constructor(
  private activatedRoute: ActivatedRoute, 
  //garde en mémoire l'info de la route paramétrée, (le "id" de l'URL est l'id de l'article)
  private location: Location 
  // Service d'Angular pour interréagir avec le navigateur -> permet de revenir en arrière (sur la vue précédement consultée)
) {}


// Configuration du ngOnInit pour la bonne récupération des éléments par id au lancement de la page article/:id
  ngOnInit(): void {
    this.getArticlePerId();
  }


// Méthode pour récupérer un article selon son id:
  getArticlePerId(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("Id souhaité : ", id);
    // route.snapshot est une image statique de l'info de la route juste après que le composant a été créé. paramMap recupère l'info "id" de l'URL pour retourner l'id de l'article qu'on appelle

    // Récupération de l'objet du mock ARTICLES dont l'id est similaire à celui de l'url
    const displayedArticleInfo = this.Articles.find((article: IArticle) => article.id === id);
    console.log("Article affiché", displayedArticleInfo);


    // Assignement de l'objet à ma variable articleInfo si j'ai un article dans ma liste
    if (displayedArticleInfo) {
      this.articleInfo = displayedArticleInfo;
    }
}



}
