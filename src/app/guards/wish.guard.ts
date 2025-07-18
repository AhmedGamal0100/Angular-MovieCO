import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginStore } from '../store/login.store';

export const wishGuard: CanActivateFn = (route, state) => {
  const loginStore = inject(LoginStore);
  let auth = loginStore.isLogin();
  return auth;
};
