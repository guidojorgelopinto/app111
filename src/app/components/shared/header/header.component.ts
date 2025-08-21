import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonSearchbar]
})
export class AppHeaderComponent {
  @Output() search = new EventEmitter<string>();
  @Output() regionChange = new EventEmitter<string>();

  onSearchChange(event: any) {
    const query = event.detail.value?.trim() ?? '';
    this.search.emit(query);
  }

  onRegionChange(event: any) {
    this.regionChange.emit(event.target.value);
  }
}

