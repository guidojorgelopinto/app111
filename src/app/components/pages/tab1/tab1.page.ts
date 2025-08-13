import { Component } from '@angular/core';
import { IonContent, IonAvatar, IonCard, IonImg,
    IonButton, IonBadge, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonItem, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonCardContent, IonItem, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader,
    IonContent,
    IonCard,
    IonItem,
    IonAvatar,
    IonLabel,
    IonImg,
    IonButton,
    IonBadge,
  ],
})
export class Tab1Page {
  discover = {
    title: 'Descubri Daily',
    subtitle: '¿Por qué ver Tierra de mafiosos?',
    author: {
      name: 'Héctor Llanos Martínez',
      role: 'Editor de Just...',
      avatar: 'assets/avatar.jpg'
    },
    image: 'assets/mafia-series.jpg',
    subtitle1: 'Mafia con un toque british',
    description: `A pesar de que tanto el director Guy Ritchie como el actor Tom Hardy están bastante encasillados, el formato serie les sienta bien a la hora de renovar sus manidos patrones. Serie de mafiosos en pleno Londres, con un estilo britán...`,
    likes: 149
  };
}
