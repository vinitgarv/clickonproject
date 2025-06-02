import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../Services/localstorage.service';
import { AuthService } from '../Services/userservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.currentUser();
  if (!user) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);
  const user = authService.currentUser();

  if (user) {
    router.navigate(['/']);
    return false;
  }

  return true;
};

