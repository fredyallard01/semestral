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
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonLabel,
    IonRow, IonSearchbar, IonText, IonThumbnail, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonList, IonItem, IonSelect, IonSelectOption, IonNav, RouterLink
  ]
  })

export class PostPage  {

  constructor(private router: Router) {
    addIcons({notificationsCircle, notificationsOutline,  searchCircle,searchCircleOutline, personCircleOutline, settingsOutline, chatboxEllipsesOutline,
      homeOutline, trendingUpOutline, bulbOutline, logOutOutline, megaphoneOutline, peopleOutline, moonOutline, readerOutline, arrowForwardOutline, addOutline
    });
  }

  

}

