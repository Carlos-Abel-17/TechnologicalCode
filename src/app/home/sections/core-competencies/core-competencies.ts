import { Component } from '@angular/core';

export interface CompetencyItem {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
}

@Component({
  selector: 'app-core-competencies-section',
  imports: [],
  templateUrl: './core-competencies.html',
  styleUrl: './core-competencies.css',
})
export class CoreCompetenciesSectionComponent {
  protected readonly items: CompetencyItem[] = [
    {
      icon: 'terminal',
      title: 'Web Dev',
      description:
        'Full-stack architectures optimized for millisecond latency and extreme concurrency.',
      actionLabel: 'Initialize',
    },
    {
      icon: 'smart_toy',
      title: 'Automation',
      description:
        'AI-driven workflows that eliminate operational bottlenecks with autonomous precision.',
      actionLabel: 'Deploy',
    },
    {
      icon: 'hub',
      title: 'API Design',
      description:
        'Robust integration layers built for secure, scalable communication between distributed systems.',
      actionLabel: 'Connect',
    },
    {
      icon: 'bolt',
      title: 'Real-time Apps',
      description:
        'Bi-directional data streaming solutions for live financial, monitoring, and chat platforms.',
      actionLabel: 'Sync',
    },
  ];
}
