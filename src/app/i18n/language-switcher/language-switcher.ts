import { Component, inject } from '@angular/core';
import { I18nService } from '../i18n.service';
import type { Lang } from '../translations';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcherComponent {
  protected readonly i18n = inject(I18nService);

  protected selectLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }
}
