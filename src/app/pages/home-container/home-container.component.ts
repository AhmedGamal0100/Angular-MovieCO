import { Component, inject, Inject, OnInit } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { HomeCardsSliderComponent } from "../../components/home-cards-slider/home-cards-slider.component";
import { HomePopularSliderComponent } from "../../components/home-popular-slider/home-popular-slider.component";
import { HomeUpcomingSliderComponent } from "../../components/home-upcoming-slider/home-upcoming-slider.component";
import { HomeMovieCardComponent } from "../../components/home-movie-card/home-movie-card.component";
import { HomeMovieSliderComponent } from "../../components/home-movie-slider/home-movie-slider.component";
import { HomeTvshowsSliderComponent } from "../../components/home-tvshows-slider/home-tvshows-slider.component";
import { ApiStore } from '../../store/api.store';

@Component({
  selector: 'app-home-container',
  imports: [HeroComponent, HomeCardsSliderComponent, HomePopularSliderComponent, HomeUpcomingSliderComponent, HomeMovieSliderComponent, HomeTvshowsSliderComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {
  ngOnDestroy() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
