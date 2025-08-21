// movie.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies/popular';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(this.apiUrl);
  }
}
