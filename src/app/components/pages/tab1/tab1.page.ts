import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AppHeaderComponent } from '../../shared/header/header.component';

import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    HttpClientModule,
    AppHeaderComponent
  ]
})
export class Tab1Page implements AfterViewInit, OnInit {
  movies: any[] = [];
  region = 'ES';
  swiperInstance: Swiper | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPopular();
  }

  ngAfterViewInit() {
    // Inicializa Swiper solo si ya hay películas
    if (this.movies.length > 0) {
      this.initSwiper();
    }
  }

  initSwiper() {
    setTimeout(() => {
      if (this.swiperInstance) {
        this.swiperInstance.destroy(true, true);
      }

      this.swiperInstance = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 40 }
        }
      });
    }, 100);
  }

  loadPopular() {
    this.http.get<any>('http://localhost:3000/movies/popular').subscribe({
      next: (data) => {
        this.movies = data.results;
        this.initSwiper(); // Reinicializa Swiper
      },
      error: (err) => {
        console.error('Error al cargar populares:', err);
      }
    });
  }

  onSearch(query: string) {
    if (query === '') {
      this.loadPopular();
    } else {
      this.http.get<any>(`http://localhost:3000/search?q=${query}&region=${this.region}`).subscribe({
        next: (data) => {
          this.movies = data.results;
          this.initSwiper(); // Reinicializa Swiper
        },
        error: (err) => {
          console.error('Error en búsqueda:', err);
        }
      });
    }
  }

  onRegionChange(newRegion: string) {
    this.region = newRegion;
  }
}
