import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchService {
  private _http = inject(HttpClient);
  private readonly headers = {
    headers: {
      "accept": "application/json",
      "Authorization": environment.TMDB_API_TOKEN
    }
  }

  getSearch(lang: string = "en-US", query: string, page: number = 1, type: string = "movie"): Observable<Object> {
    return this._http.get(
      `https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=${lang}&page=${page}`, this.headers);
  }
}
