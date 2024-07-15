import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonItem, IonInput, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle } from 'ionicons/icons';


@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonItem, IonInput, RouterLink, IonIcon]
})
export class registroPage {
  constructor(private router: Router) {
    addIcons({logoFacebook, logoGoogle});
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}

