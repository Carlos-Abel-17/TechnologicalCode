import { Component, inject } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';
import type { MessageKey } from '../../../i18n/translations';

export type PortfolioLayout = 'wide-left' | 'equal-right';

export interface PortfolioProject {
  layout: PortfolioLayout;
  imageUrl: string;
  altKey: MessageKey;
  categoryKey: MessageKey;
  titleKey: MessageKey;
  descriptionKey: MessageKey;
  accent: 'secondary' | 'primary';
  tags: string[];
}

@Component({
  selector: 'app-portfolio-section',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioSectionComponent {
  protected readonly i18n = inject(I18nService);

  protected readonly projects: PortfolioProject[] = [
    {
      layout: 'wide-left',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB19cAZxMgoBZ89q6_6r3tO18XUbUbi0VVpiaeOy4TseEHL7Fg8BwxKBaLldrLVGDU0w4D5tGcs52Y7VsZVBffU4eg87CumZ5iMkyYR9QWNcMHE8cMKSeWOD2OUcG8B6LkJEzepYHUXLM2ZNXOJxZG1ow-KijPUYQydp6kZkMHBK0i4aBOEo8ibH5RaaZqo5wCwOB-EXuCfKq5G3IhlPz4HUY1DxWi8qUfsC35ARDYauc4zalT8Xu-Cn57QcJDIHBGaQMlsRZxURXLC',
      altKey: 'portfolio.nexus.alt',
      categoryKey: 'portfolio.nexus.category',
      titleKey: 'portfolio.nexus.title',
      descriptionKey: 'portfolio.nexus.desc',
      accent: 'secondary',
      tags: ['React/Go', 'WebSockets', 'Kubernetes'],
    },
    {
      layout: 'equal-right',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZfvQL49aFqG7K2Z-iaQGxNQJv5ATMs6mgSg7-A6-giUZihIxEZOnodWWKSSLX2Ttbo1GiC07U7uJw8wA5Qx2AJqCTkV8Ci0-Xe6_55_0YJO6mtlzzuL5VesxDGRJlNvU3kEMnPAEzw_6YT_a246_XZ0wGBWHo4LcQS5GH5ai0Ue0u9HTsG371Jk5MLI0yyZt-DTu1DGuRpp9rOU-td6vUeNjTj7Z8ZXMKPei4JqmehfeejovuySHOPTn1wxlpGgUsKAc1zStsoaDq',
      altKey: 'portfolio.vortex.alt',
      categoryKey: 'portfolio.vortex.category',
      titleKey: 'portfolio.vortex.title',
      descriptionKey: 'portfolio.vortex.desc',
      accent: 'primary',
      tags: ['Python', 'TensorFlow', 'AWS Lambda'],
    },
  ];
}
