import { Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { IMovie } from '../../interfaces/movie';
import { ApiStore } from '../../store/api.store';
import { Router } from '@angular/router';
import { FilterCardComponent } from "../../components/filter-card/filter-card.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-movies-coming',
  imports: [FilterCardComponent, PaginatorModule, ButtonModule],
  templateUrl: './movies-coming.component.html',
  styleUrl: './movies-coming.component.scss'
})
export class MoviesComingComponent implements OnDestroy, OnInit {
  private _apiStore = inject(ApiStore);
  private _router = inject(Router);
  movieCardObjs = signal<IMovie[]>([]);
  page = signal(1);
  totalRecords = signal(0);
  first3: number = 0;
  rows3: number = 20;

  constructor() {
    effect(() => {
      const currentPage = this.page();
      this._apiStore.setPageComing(currentPage);
      this.totalRecords.set(this._apiStore.comingMoviesTotal());
      this.movieCardObjs.set(this._apiStore.upComingMovies() as IMovie[]);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this._apiStore.setPageComing(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  routeToDetails(movie: IMovie) {
    this._router.navigateByUrl('/home/details/' + movie.id);
  }

  onPageChange(event: PaginatorState) {
    this.first3 = event.first ?? 0;
    this.rows3 = event.rows ?? 20;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newPage = Math.floor(this.first3 / this.rows3) + 1;
    this.page.set(newPage);
  }
}