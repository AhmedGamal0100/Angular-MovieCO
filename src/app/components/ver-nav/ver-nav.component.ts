import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { NavToggleService } from '../../services/nav-toggle.service';
import { LoginStore } from '../../store/login.store';
import { Router, RouterModule } from '@angular/router';
import { GoogleAuthService } from '../../services/google-auth.service';
import { IAccount } from '../../interfaces/account';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ver-nav',
  imports: [DrawerModule, ButtonModule, AvatarModule, RouterModule, Toast],
  templateUrl: './ver-nav.component.html',
  styleUrl: './ver-nav.component.scss',
  providers: [MessageService]
})
export class VerNavComponent {
  navToggle = inject(NavToggleService);
  loginStore = inject(LoginStore);
  private _messageService = inject(MessageService);
  private _router = inject(Router);
  private _googleAuthService = inject(GoogleAuthService);
  visible = signal(false);
  isLogged = signal(false);
  loggedAccount = signal<IAccount | null>(null);
  loggedAccountName = signal<string | null>(null);

  @ViewChild('drawerRef') drawerRef!: Drawer;

  constructor() {
    effect(() => {
      this.visible.set(this.navToggle.getVisibility());

      const tokenExist = sessionStorage.getItem("user_id_token");
      const account = JSON.parse(sessionStorage.getItem("user_id") ?? "null");

      if (tokenExist && account?.email) {
        this.loginStore.loginMethod(account.email);
        this.isLogged.set(true);
      } else {
        this.loginStore.logoutMethod();
        this.isLogged.set(false);
      }

      this.getLoggedAccount();

      const parts = this.loggedAccount()?.name?.split(' ') || [];
      let displayName = "";

      if (parts.length > 1) {
        displayName = parts[0] + parts[1][0].toUpperCase() + parts[1].slice(1).toLowerCase();
      } else if (parts.length === 1) {
        displayName = parts[0];
      }

      this.loggedAccountName.set(displayName);
    });
  }


  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  login() {
    this._router.navigateByUrl('/login');
  }

  register() {
    this._router.navigateByUrl('/register');
  }

  getLoggedAccount() {
    const account = JSON.parse(sessionStorage.getItem("user_id") ?? "null");
    if (account) {
      this.loggedAccount.set(account);
    } else {
      this.loggedAccount.set(null);
    }
  }

  async logOut() {
    await this._googleAuthService.GoogleSignOut();
    this.loginStore.logoutMethod();
    this.isLogged.set(false);
    this._router.navigateByUrl('/home');
  }

  isUserLogged() {
    if (!this.isLogged()) {
      this.showNotify("Error", "You have to login first to see your wishlist!")
    }
  }

  showNotify(summaryPar: string, detailPar: string) {
    this._messageService.add({ severity: 'warn', summary: summaryPar, detail: detailPar });
  }
}
