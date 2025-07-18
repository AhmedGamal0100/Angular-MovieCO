import { Component, effect, inject, Input, input, OnInit, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';
import { ITv } from '../../interfaces/tv';

@Component({
  selector: 'app-filter-tv-card',
  imports: [FormsModule, Knob],
  templateUrl: './filter-tv-card.component.html',
  styleUrl: './filter-tv-card.component.scss'
})
export class FilterTvCardComponent {
  private readonly constURL = `https://image.tmdb.org/t/p/w500`;
  @Input() showObj?: ITv;
  showCardAveragePopularity = signal(0);
  showCardThumbnailImg = signal("");
  showCardTitle = signal("");
  showCardDate = signal("");

  constructor() {
    effect(() => {
      this.showCardThumbnailImg.set(this.constURL + (this.showObj?.poster_path ?? ""));
      this.showCardAveragePopularity.set(parseFloat(((this.showObj?.vote_average ?? 0) * 10).toFixed(2)));
      this.showCardTitle.set(this.showObj?.name ?? "");
      this.showCardDate.set(this.showObj?.first_air_date ?? "");
    })
  }
}
