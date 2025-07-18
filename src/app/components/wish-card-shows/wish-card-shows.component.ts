import { Component, effect, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ITv } from '../../interfaces/tv';
import { ITvDetails } from '../../interfaces/tv-details';

@Component({
  selector: 'app-wish-card-shows',
  templateUrl: './wish-card-shows.component.html',
  styleUrl: './wish-card-shows.component.scss',
  standalone: true
})
export class WishCardShowsComponent {
  showWishObj = input<ITvDetails>();
  private _router = inject(Router);

  getPosterUrl(): string {
    return this.showWishObj()?.poster_path
      ? `https://image.tmdb.org/t/p/w500${this.showWishObj()?.poster_path}`
      : 'assets/images/no-image-available.png';
  }

  viewDetails() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._router.navigateByUrl('/home/details-tv/' + this.showWishObj()?.id);
  }
}
