import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travel-pitch',
  templateUrl: './travel-pitch.component.html',
  styleUrls: ['./travel-pitch.component.css']
})
export class TravelPitchComponent {

  @Input() dataTravelPitch!: string;

}
