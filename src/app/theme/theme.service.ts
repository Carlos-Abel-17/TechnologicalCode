import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

const STORAGE_KEY = 'tc-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** Tema activo; por defecto claro. */
  readonly theme = signal<AppTheme>('light');

  constructor() {
    const initial = this.readInitialTheme();
    this.theme.set(initial);
    this.applyToDocument(initial);
  }

  setTheme(mode: AppTheme): void {
    this.theme.set(mode);
    this.applyToDocument(mode);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  }

  toggle(): void {
    this.setTheme(this.theme() === 'light' ? 'dark' : 'light');
  }

  private readInitialTheme(): AppTheme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === 'dark' || raw === 'light') {
        return raw;
      }
    } catch {
      /* ignore */
    }
    return 'light';
  }

  private applyToDocument(mode: AppTheme): void {
    this.doc.documentElement.setAttribute('data-theme', mode);
    this.doc.documentElement.style.colorScheme = mode === 'dark' ? 'dark' : 'light';
  }
}
