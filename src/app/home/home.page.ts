import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonLabel,
  IonRow, IonSearchbar, IonText, IonThumbnail, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonList, IonItem, IonSelect, IonSelectOption, IonNav
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatboxEllipsesOutline, notificationsCircle, notificationsOutline, personCircleOutline, searchCircle, searchCircleOutline, settingsOutline,
  homeOutline,trendingUpOutline, bulbOutline, logOutOutline, megaphoneOutline, peopleOutline, moonOutline,
  readerOutline, arrowForwardOutline, addOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonSearchbar, IonFooter, IonCard
    , IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonIcon, IonThumbnail, IonText, IonLabel, IonSegment, IonSegmentButton,
    IonList, IonItem, IonSelect, IonSelectOption, IonNav, RouterLink
  ],
})
export class HomePage {
  segment_value = 'apuntes';

  constructor(private router: Router) {
  addIcons({notificationsCircle, notificationsOutline,  searchCircle,searchCircleOutline, personCircleOutline, settingsOutline, chatboxEllipsesOutline,
    homeOutline, trendingUpOutline, bulbOutline, logOutOutline, megaphoneOutline, peopleOutline, moonOutline, readerOutline, arrowForwardOutline, addOutline
  });
}

  changeSegment(event: any){
    console.log(event);
    this.segment_value = event.detail.value;
  }


}
