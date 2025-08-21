import { Component } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownCircle } from 'ionicons/icons';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-example',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css'],
  imports: [IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonContent, HeaderComponent],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ caretDownCircle });
  }
}
