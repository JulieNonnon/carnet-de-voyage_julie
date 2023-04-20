import { Component, Input } from '@angular/core';
import { ARTICLES, IAdvices, IArticle, ICons, IPros } from 'src/app/Mocks/article';

@Component({
  selector: 'app-travel-review',
  templateUrl: './travel-review.component.html',
  styleUrls: ['./travel-review.component.css']
})
export class TravelReviewComponent {

  @Input() dataPros!: IPros[];
  @Input() dataCons!: ICons[];
  @Input() dataAdvices!: IAdvices[];

}
