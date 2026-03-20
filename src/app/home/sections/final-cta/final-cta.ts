import { Component, inject } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';

@Component({
  selector: 'app-final-cta-section',
  imports: [],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCtaSectionComponent {
  protected readonly i18n = inject(I18nService);
}
