import { Component, effect, inject, input, signal } from '@angular/core';
import { IMovieDetails } from '../../interfaces/movie-details';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wish-card-movie',
  standalone: true,
  imports: [],
  templateUrl: './wish-card-movie.component.html',
  styleUrl: './wish-card-movie.component.scss',
})
export class WishCardMovieComponent {
  movieWishObj = input<IMovieDetails>();
  private _router = inject(Router);

  constructor() {
    effect(() => {

    });
  }

  getPosterUrl(): string {
    return this.movieWishObj()?.poster_path
      ? `https://image.tmdb.org/t/p/w500${this.movieWishObj()?.poster_path}`
      : 'assets/images/no-image-available.png';
  }

  viewMovieDetails() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._router.navigateByUrl('/home/details/' + this.movieWishObj()?.id);
  }
}
