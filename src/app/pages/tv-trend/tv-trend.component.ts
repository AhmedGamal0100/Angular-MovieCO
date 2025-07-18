import { Component, effect, inject, OnDestroy, signal } from '@angular/core';
import { ApiStore } from '../../store/api.store';
import { Router } from '@angular/router';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ITv } from '../../interfaces/tv';
import { FilterTvCardComponent } from "../../components/filter-tv-card/filter-tv-card.component";

@Component({
  selector: 'app-tv-trend',
  imports: [PaginatorModule, ButtonModule, FilterTvCardComponent],
  templateUrl: './tv-trend.component.html',
  styleUrl: './tv-trend.component.scss'
})
export class TvTrendComponent implements OnDestroy {
  private _apiStore = inject(ApiStore);
  private _router = inject(Router);

  tvCardObjs = signal<ITv[]>([]);
  page = signal(1);
  totalRecords = signal(0);
  first3: number = 0;
  rows3: number = 20;

  constructor() {
    effect(() => {
      const currentPage = this.page();
      this._apiStore.setTvShow(currentPage);
      this.tvCardObjs.set(this._apiStore.tvShow() as ITv[]);
      this.totalRecords.set(this._apiStore.tvShowTotal());
    });
  }

  ngOnDestroy(): void {
    this._apiStore.setPageComing(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  routeToDetails(show: ITv) {
    this._router.navigateByUrl('/home/details-tv/' + show.id);
  }

  onPageChange(event: PaginatorState) {
    this.first3 = event.first ?? 0;
    this.rows3 = event.rows ?? 20;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newPage = Math.floor(this.first3 / this.rows3) + 1;
    this.page.set(newPage);
  }
}
