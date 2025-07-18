import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';
import { ApiSearchStore } from '../../store/api-search.store';

@Component({
  selector: 'app-movies-header-page',
  imports: [FormsModule, RadioButton],
  templateUrl: './movies-header-page.component.html',
  styleUrl: './movies-header-page.component.scss'
})
export class MoviesHeaderPageComponent {
  private _apiSearch = inject(ApiSearchStore);
  query = computed(() => this._apiSearch.query());
  selectedType: any = null;

  types: any[] = [
    { name: 'Movie', key: 'movie' },
    { name: 'TV Show', key: 'tv' }
  ];

  constructor() {
    effect(() => {
      const currentType = this._apiSearch.type();
      this.selectedType = this.types.find(t => t.key === currentType) ?? this.types[0];
    });
  }

  onTypeChange(type: any) {
    this.selectedType = type;
    this._apiSearch.setType(type.key);
  }
}
