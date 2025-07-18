import { Component, computed, effect, inject, signal } from '@angular/core';
import { IAccount } from '../../interfaces/account';
import { Router } from '@angular/router';
import { WishCardMovieComponent } from "../../components/wish-card-movie/wish-card-movie.component";
import { WishCardShowsComponent } from "../../components/wish-card-shows/wish-card-shows.component";
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { registerStore } from '../../store/register.store';
import { NotificationStore } from '../../store/notification.store';
import { IMovieDetails } from '../../interfaces/movie-details';
import { ITvDetails } from '../../interfaces/tv-details';

@Component({
  selector: 'app-wish-list',
  imports: [WishCardMovieComponent, WishCardShowsComponent, Toast],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
  providers: [MessageService]
})
export class WishListComponent {
  private _router = inject(Router);
  private _messageService = inject(MessageService);
  private _registerStore = inject(registerStore);
  private _notificationStore = inject(NotificationStore);

  private _userObjLogged = signal<IAccount>({
    sub: "",
    email: "",
    name: "",
    given_name: "",
    password: "",
    isPassGoogle: false,
    wishList: { movies: [], tvShows: [] }
  });

  userObjWish = computed(() => this._userObjLogged().wishList);

  constructor() {
    // Sync signal with sessionStorage changes
    this.refreshUserObj();
  }

  ngOnInit() {
    this.refreshUserObj();
  }

  ngOnDestroy() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private refreshUserObj() {
    const userObjSession = sessionStorage.getItem("user_id");
    if (userObjSession) {
      this._userObjLogged.set(JSON.parse(userObjSession));
    } else {
      this._userObjLogged.set({
        sub: "",
        email: "",
        name: "",
        given_name: "",
        password: "",
        isPassGoogle: false,
        wishList: { movies: [], tvShows: [] }
      });
    }
  }

  goHome() {
    this._router.navigateByUrl("/");
  }

  toggleWishlist(event: Event, item: IMovieDetails | ITvDetails, type: 'movie' | 'tv') {
    const cardSelector = type === 'movie' ? '.wish__movies-card' : '.wish__shows-card';
    const card = (event.currentTarget as HTMLElement).closest(cardSelector);

    if (card) {
      card.classList.add('fade-out');
    }

    setTimeout(() => {
      if (type === 'movie') {
        this._registerStore.toggleMovieWishlist(item as IMovieDetails);
        this._notificationStore.pushNotification(
          `Removed "${(item as IMovieDetails).title}" from your wishlist`
        );
        this.showNotify('Wishlist Updated', `${(item as IMovieDetails).title} was removed from your wishlist`);
      } else {
        this._registerStore.toggleMovieWishlistTv(item as ITvDetails);
        this._notificationStore.pushNotification(
          `Removed "${(item as ITvDetails).name}" from your wishlist`
        );
        this.showNotify('Wishlist Updated', `${(item as ITvDetails).name} was removed from your wishlist`);
      }

      this.refreshUserObj(); // 🔥 Refresh signal to update template
    }, 300);
  }

  private showNotify(summary: string, detail: string) {
    this._messageService.add({ severity: 'warn', summary, detail });
  }
}
