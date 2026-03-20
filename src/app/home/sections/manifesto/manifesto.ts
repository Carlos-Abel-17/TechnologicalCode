import { Component, inject } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';

@Component({
  selector: 'app-manifesto-section',
  imports: [],
  templateUrl: './manifesto.html',
  styleUrl: './manifesto.css',
})
export class ManifestoSectionComponent {
  protected readonly i18n = inject(I18nService);
}
