import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-movie-card.component.html',
  styleUrl: './home-movie-card.component.scss'
})
export class HomeMovieCardComponent {
  @Input() movieCardId!: number;

  videoUrl: SafeResourceUrl | undefined;
  sanitizer = inject(DomSanitizer);
  private _http = inject(HttpClient);

  private headers = {
    headers: {
      accept: "application/json",
      Authorization: environment.TMDB_API_TOKEN
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movieCardId']?.currentValue) {
      this.loadVideo(this.movieCardId);
    }
  }

  loadVideo(movieId: number) {
    this._http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, this.headers).subscribe({
      next: (data: any) => {
        const trailer = data.results.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube');
        if (trailer) {
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${trailer.key}`
          );
        } else {
          console.warn('No trailer found');
          this.videoUrl = undefined;
        }
      },
      error: err => console.error('Failed to load API', err)
    });
  }
}
