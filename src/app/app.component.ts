import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonFooter, IonTitle, IonContent, IonRow, IonCol, IonGrid, IonButton, 
  IonHeader } from '@ionic/angular/standalone';
import { HomePage } from './home/home.page';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonToolbar, IonFooter, IonTitle, IonContent, IonRow, IonCol, IonGrid, IonButton,
    HomePage, IonHeader 
  ],
})


export class AppComponent {
  constructor() {}
}
