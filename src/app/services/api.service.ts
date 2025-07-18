import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private readonly headers = {
    headers: {
      "accept": "application/json",
      "Authorization": environment.TMDB_API_TOKEN
    }
  }

  getMovies(lang: string = 'en-US', page: number = 1) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/now_playing?language=${lang}&page=${page}`, this.headers);
  }
  getMoviesPopular(lang: string = 'en-US', page: number = 1) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/popular?language=${lang}&page=${page}`, this.headers);
  }
  getMoviesUpComing(lang: string = 'en-US', page: number = 1) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=${lang}&page=${page}`, this.headers);
  }
  getTvShows(lang: string = 'en-US', page: number = 1) {
    return this._http.get(
      `https://api.themoviedb.org/3/tv/top_rated?language=${lang}&page=${page}`, this.headers);
  }
}
