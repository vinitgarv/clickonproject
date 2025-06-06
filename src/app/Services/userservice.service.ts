import { inject, Injectable, signal } from '@angular/core';
import { User } from '../Models/user';
import { StorageService } from './localstorage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  storageService: StorageService = inject(StorageService)
  private localStorageKey = 'users';
  private currentUserKey = 'currentUser';

  currentUser = signal<User | null>(this.getCurrentUserFromStorage());

  private getUsers(): User[] {
    return JSON.parse(this.storageService.getItem(this.localStorageKey) || '[]');
  }

  private saveUsers(users: User[]) {
    this.storageService.setItem(this.localStorageKey, JSON.stringify(users));
  }

  private getCurrentUserFromStorage(): User | null {
    const user = this.storageService.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  signup(user: User): boolean {
    const users = this.getUsers();
    if (users.find(u => u.email === user.email)) {
      return false;
    }
    users.push(user);
    this.saveUsers(users);
    return true;
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      this.storageService.setItem(this.currentUserKey, JSON.stringify(user));
      this.currentUser.set(user);
      return true;
    }
    return false;
  }

  logout() {
    this.storageService.removeItem(this.currentUserKey);
    this.currentUser.set(null);
  }
}
