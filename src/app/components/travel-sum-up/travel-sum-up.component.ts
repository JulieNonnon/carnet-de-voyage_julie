import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travel-sum-up',
  templateUrl: './travel-sum-up.component.html',
  styleUrls: ['./travel-sum-up.component.css']
})
export class TravelSumUpComponent {

  @Input() dataTravelSumUp!: string;

}
