import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { IMovieDetails } from '../../interfaces/movie-details';
import { Router } from '@angular/router';
import { ISearch } from '../../interfaces/search';
import { ApiSearchStore } from '../../store/api-search.store';

@Component({
  selector: 'app-search-card',
  imports: [],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  searchObj = input<ISearch>();
  private _router = inject(Router);
  private _apiSearch = inject(ApiSearchStore);
  query = computed(() => this._apiSearch.query());
  type = computed(() => this._apiSearch.type());

  getPosterUrl(): string {
    return this.searchObj()?.poster_path
      ? `https://image.tmdb.org/t/p/w500${this.searchObj()?.poster_path}`
      : 'assets/images/no-image-available.png';
  }

  viewMovieDetails() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.type() === 'movie') {
      this._router.navigateByUrl('/home/details/' + this.searchObj()?.id);
    } else {
      this._router.navigateByUrl('/home/details-tv/' + this.searchObj()?.id);
    }
  }
}
