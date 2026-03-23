import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface CompetencyItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  actionKey: string;
}

@Component({
  selector: 'app-core-competencies-section',
  imports: [TranslatePipe],
  templateUrl: './core-competencies.html',
  styleUrl: './core-competencies.css',
})
export class CoreCompetenciesSectionComponent {
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
