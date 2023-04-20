import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travel-intro',
  templateUrl: './travel-intro.component.html',
  styleUrls: ['./travel-intro.component.css']
})
export class TravelIntroComponent {

  // Import des données que j'ai besoin depuis le parent (page article)

  @Input() dataCountry!: string;
  @Input() dataTown!: string;
  @Input() dataDateToGo!: string;
  @Input() dataDateToReturn!: string;
  @Input() dataMainPicture!: string;


}
