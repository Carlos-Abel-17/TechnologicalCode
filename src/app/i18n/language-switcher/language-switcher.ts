import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ActiveLanguage } from '../../locale/active-language';
import type { Lang } from '../translations';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslatePipe],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcherComponent {
  private readonly translate = inject(TranslateService);
  protected readonly active = inject(ActiveLanguage);

  private static readonly STORAGE_KEY = 'tc-lang';

  protected selectLang(lang: Lang): void {
    this.translate.use(lang).subscribe(() => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LanguageSwitcherComponent.STORAGE_KEY, lang);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    });
  }
}
