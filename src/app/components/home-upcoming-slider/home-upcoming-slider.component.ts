import { Component, effect, inject, signal } from '@angular/core';
import { HomeCardsComponent } from "../home-cards/home-cards.component";
import { ApiStore } from '../../store/api.store';
import { IMovie } from '../../interfaces/movie';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-upcoming-slider',
  imports: [HomeCardsComponent, Carousel, ButtonModule, RouterModule],
  templateUrl: './home-upcoming-slider.component.html',
  styleUrl: './home-upcoming-slider.component.scss'
})
export class HomeUpcomingSliderComponent {
  private _apiStore = inject(ApiStore);
  private _router = inject(Router);
  movieCardObjs = signal<IMovie[]>([{
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }]);
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1440px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 1
      }
    ]
  }

  routeToDetails(movie: IMovie) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._router.navigateByUrl('/home/details/' + movie.id);
  }

  constructor() {
    effect(() => {
      this.movieCardObjs.set((this._apiStore.upComingMovies()) as (IMovie[]));
    })
  }
}
