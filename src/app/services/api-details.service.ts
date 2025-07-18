import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDetailsService {
  private _http = inject(HttpClient);
  private readonly headers = {
    headers: {
      "accept": "application/json",
      "Authorization": environment.TMDB_API_TOKEN
    }
  }

  getDetailedMovie(id: number = 1278950, lang: string = "en_US"): Observable<Object> {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}?language=${lang}`, this.headers);
  }
  getDetailedReviewMovie(id: number = 1278950, lang: string = "en_US", page: number = 1): Observable<Object> {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=${lang}&page=${page}`, this.headers);
  }
  getDetailedRecommendations(id: number = 1278950, lang: string = "en_US", page: number = 1): Observable<Object> {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=${lang}&page=${page}`, this.headers);
  }
}
