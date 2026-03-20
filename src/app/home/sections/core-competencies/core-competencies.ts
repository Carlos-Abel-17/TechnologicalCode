import { Component, inject } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';
import type { MessageKey } from '../../../i18n/translations';

export interface CompetencyItem {
  icon: string;
  titleKey: MessageKey;
  descriptionKey: MessageKey;
  actionKey: MessageKey;
}

@Component({
  selector: 'app-core-competencies-section',
  imports: [],
  templateUrl: './core-competencies.html',
  styleUrl: './core-competencies.css',
})
export class CoreCompetenciesSectionComponent {
  protected readonly i18n = inject(I18nService);

  protected readonly items: CompetencyItem[] = [
    {
      icon: 'terminal',
      titleKey: 'competencies.web.title',
      descriptionKey: 'competencies.web.desc',
      actionKey: 'competencies.web.action',
    },
    {
      icon: 'smart_toy',
      titleKey: 'competencies.auto.title',
      descriptionKey: 'competencies.auto.desc',
      actionKey: 'competencies.auto.action',
    },
    {
      icon: 'hub',
      titleKey: 'competencies.api.title',
      descriptionKey: 'competencies.api.desc',
      actionKey: 'competencies.api.action',
    },
    {
      icon: 'bolt',
      titleKey: 'competencies.rt.title',
      descriptionKey: 'competencies.rt.desc',
      actionKey: 'competencies.rt.action',
    },
  ];
}
