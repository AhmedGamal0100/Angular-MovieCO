import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDetailsTvService {
  private _http = inject(HttpClient);
  private readonly headers = {
    headers: {
      "accept": "application/json",
      "Authorization": environment.TMDB_API_TOKEN
    }
  }

getDetailedTv(id: number, lang: string = "en-US"): Observable<Object> {
  return this._http.get(
    `https://api.themoviedb.org/3/tv/${id}?language=${lang}`, this.headers);
}

getDetailedReviewTv(id: number, lang: string = "en-US", page: number = 1): Observable<Object> {
  return this._http.get(
    `https://api.themoviedb.org/3/tv/${id}/reviews?language=${lang}&page=${page}`, this.headers);
}

getDetailedRecommendationsTv(id: number, lang: string = "en-US", page: number = 1): Observable<Object> {
  return this._http.get(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?language=${lang}&page=${page}`, this.headers);
}

}
