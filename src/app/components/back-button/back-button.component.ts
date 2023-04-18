import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {

  constructor(private route: ActivatedRoute, private location: Location){}

//Création de la méthode permettant le retour sur la page précédement consultée, avec l'import de Location plus haut
goBack(): void {
  this.location.back();
}

}
