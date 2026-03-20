import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LanguageSwitcherComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  protected readonly i18n = inject(I18nService);
}
