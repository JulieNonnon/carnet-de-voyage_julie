import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLatestArticleComponent } from './components/home-latest-article/home-latest-article.component';
import { HomeOtherArticlesComponent } from './components/home-other-articles/home-other-articles.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeLatestArticleComponent,
    HomeOtherArticlesComponent,
    HomeComponent,
    ArticleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
