import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly platform = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  constructor() { }

  setItem(key: string, value: any): void {
    if (isPlatformBrowser(this.platform)) {
      window.localStorage.setItem(key, value);
    }
  }

  getItem(key: string): any {
    if (isPlatformBrowser(this.platform)) {
      return window.localStorage.getItem(key);
    }
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platform)) {
      window.localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (isPlatformBrowser(this.platform)) {
      window.localStorage.clear();
    }
  }
}

