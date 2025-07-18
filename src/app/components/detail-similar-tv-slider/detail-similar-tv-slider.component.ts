import { Component, effect, inject, signal } from '@angular/core';
import { ITv } from '../../interfaces/tv';
import { ApiDetailsTvStore } from '../../store/api-details-tv.store';
import { Router } from '@angular/router';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { HomeTvCardComponent } from "../home-tv-card/home-tv-card.component";
@Component({
  selector: 'app-detail-similar-tv-slider',
  imports: [Carousel, ButtonModule, HomeTvCardComponent],
  templateUrl: './detail-similar-tv-slider.component.html',
  styleUrl: './detail-similar-tv-slider.component.scss'
})
export class DetailSimilarTvSliderComponent {
  private _apiDetailsTvStore = inject(ApiDetailsTvStore);
  private _router = inject(Router);
  tvCardObjs = signal<ITv[]>([]);
  responsiveOptions: any[] | undefined;

  constructor() {
    effect(() => {
      const currentTvId = this._apiDetailsTvStore.id();
      const recommendations = this._apiDetailsTvStore.detailedRecommendationsTv();

      if (currentTvId && recommendations?.length) {
        this.tvCardObjs.set(recommendations as ITv[]);
      } else {
        this.tvCardObjs.set([]);
      }
    });
  }

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

  routeToDetails(tvShow: ITv) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._router.navigateByUrl('/home/details-tv/' + tvShow.id);
  }
}
