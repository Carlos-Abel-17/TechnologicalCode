import { Injectable, signal } from '@angular/core';
import { MESSAGES, type Lang, type MessageKey } from './translations';

const STORAGE_KEY = 'tc-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.readInitialLang());

  constructor() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.lang();
    }
  }

  private readInitialLang(): Lang {
    if (typeof localStorage === 'undefined') {
      return 'es';
    }
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'en' || stored === 'es') {
      return stored;
    }
    if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('es')) {
      return 'es';
    }
    return 'es';
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  t(key: MessageKey): string {
    return MESSAGES[this.lang()][key];
  }
}
