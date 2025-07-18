import { Component, effect, inject, OnChanges, signal, ViewChild } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NavToggleService } from '../../services/nav-toggle.service';
import { NotificationStore } from '../../store/notification.store';
import { BadgeModule } from 'primeng/badge';
import { ApiStore } from '../../store/api.store';
import { Router } from '@angular/router';
import { ApiDetailsStore } from '../../store/api-details.store';
import { ApiDetailsTvStore } from '../../store/api-details-tv.store';
import { ApiSearchStore } from '../../store/api-search.store';

@Component({
  selector: 'app-hr-nav',
  imports: [InputIconModule, IconFieldModule, BadgeModule, InputTextModule, FloatLabelModule, FormsModule, ToggleButtonModule, PopoverModule, ButtonModule, CommonModule],
  templateUrl: './hr-nav.component.html',
  styleUrl: './hr-nav.component.scss'
})
export class HrNavComponent {
  private _notificationStore = inject(NotificationStore);
  private _router = inject(Router);
  private _apiStore = inject(ApiStore);
  private _apiStoreTv = inject(ApiDetailsTvStore);
  private _apiStoreMovie = inject(ApiDetailsStore);
  private _apiSearch = inject(ApiSearchStore);
  notificationsList = signal<string[]>([]);
  notificationLength = signal<number>(0);
  navToggle = inject(NavToggleService);
  searchValue = signal<string | undefined>(undefined);
  mode = <boolean>(false);
  isRtl = <boolean>(false);
  selectedLang = signal<{ lang: string } | null>(null);
  @ViewChild('op') op!: Popover;
  @ViewChild('opCombo') opCombo!: Popover;
  Languages = [{
    lang: 'EN',
  }, {
    lang: 'AR',
  }, {
    lang: 'FR',
  }, {
    lang: 'ZH'
  }
  ];

  constructor() {
    effect(() => {
      this.notificationsList.set(
        this._notificationStore.notificationState().map(n => n.notificationState)
      );
      this.notificationLength.set(
        this._notificationStore.notificationState().length
      );
      this._apiStore.setLanguage(this.selectedLang()?.lang || 'en-US');
      this._apiStoreTv.setLanguage(this.selectedLang()?.lang || 'en-US');
      this._apiStoreMovie.setLanguage(this.selectedLang()?.lang || 'en-US');
      this._apiSearch.setLanguage(this.selectedLang()?.lang || 'en-US');
    })
  }

  toggle(event: any) {
    this.op.toggle(event);
  }

  toggleCombo(event: any) {
    this.opCombo.toggle(event);
  }

  selectMember(language: { lang: string }) {
    this.selectedLang.set({ lang: language.lang.toLowerCase() });
    this.opCombo.hide();
    this._router.navigateByUrl("/")
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      if (this.mode) {
        element.classList.add('my-add-dark');
      } else {
        element.classList.remove('my-add-dark');
      }
    }
  }

  changeVerticalBarDirection() {
    this.navToggle.setPosition();
    const element = document.querySelector('html');
    if (element) {
      if (this.isRtl) {
        element.setAttribute('dir', 'rtl');
      } else {
        element.setAttribute('dir', 'ltr');
      }
    }
  }

  search(event: KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key === 'Enter') {
      const value = this.searchValue();
      if (value && value.trim().length > 0) {
        this._apiSearch.setQuery(value.trim());
        this._apiSearch.setType('movie');
        this._router.navigate(['home/search']);
      }
      this.searchValue.set("");
    }
  }

  onDestroy() {
    this.mode = false;
    this.isRtl = false;
  }
}
