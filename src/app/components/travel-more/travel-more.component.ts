import { Component, Input } from '@angular/core';
import { ARTICLES, IArticle, IMinorPicture } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-more',
  templateUrl: './travel-more.component.html',
  styleUrls: ['./travel-more.component.css']
})
export class TravelMoreComponent {

  @Input() dataMinorPictures!: IMinorPicture[];

}
