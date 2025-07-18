import { Component, computed, effect, inject, signal } from '@angular/core';
import { MoviesHeaderPageComponent } from "../../components/movies-header-page/movies-header-page.component";
import { ApiSearchStore } from '../../store/api-search.store';
import { SearchCardComponent } from "../../components/search-card/search-card.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search',
  imports: [MoviesHeaderPageComponent, SearchCardComponent, PaginatorModule, ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private _apiSearch = inject(ApiSearchStore);

  searchResults = computed(() => this._apiSearch.searchRes());
  totalResults = computed(() => this._apiSearch.searchTotalResults());
  type = computed(() => this._apiSearch.type());
  query = computed(() => this._apiSearch.query());

  page = signal(1);
  first = signal(0);
  rows = 20;

  constructor() {
    effect(() => {
      const currentQuery = this.query();
      const currentType = this.type();
      const currentPage = this.page();

      this._apiSearch.setPage(currentPage);

      if (currentPage === 1) {
        this.first.set(0);
      }
    });
  }

  onPageChange(event: PaginatorState) {
    const newFirst = event.first ?? 0;
    this.first.set(newFirst);
    const newPage = Math.floor(newFirst / this.rows) + 1;
    this.page.set(newPage);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearSearch() {
    this._apiSearch.setQuery("");
    this.page.set(1);
    this.first.set(0);
  }
}
