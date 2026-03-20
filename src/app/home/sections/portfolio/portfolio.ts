import { Component } from '@angular/core';

export type PortfolioLayout = 'wide-left' | 'equal-right';

export interface PortfolioProject {
  layout: PortfolioLayout;
  imageUrl: string;
  imageAlt: string;
  category: string;
  accent: 'secondary' | 'primary';
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio-section',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioSectionComponent {
  protected readonly projects: PortfolioProject[] = [
    {
      layout: 'wide-left',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB19cAZxMgoBZ89q6_6r3tO18XUbUbi0VVpiaeOy4TseEHL7Fg8BwxKBaLldrLVGDU0w4D5tGcs52Y7VsZVBffU4eg87CumZ5iMkyYR9QWNcMHE8cMKSeWOD2OUcG8B6LkJEzepYHUXLM2ZNXOJxZG1ow-KijPUYQydp6kZkMHBK0i4aBOEo8ibH5RaaZqo5wCwOB-EXuCfKq5G3IhlPz4HUY1DxWi8qUfsC35ARDYauc4zalT8Xu-Cn57QcJDIHBGaQMlsRZxURXLC',
      imageAlt: 'Nexus Alpha Dashboard',
      category: 'Enterprise Platform',
      accent: 'secondary',
      title: 'Nexus Alpha Dashboard',
      description:
        'A high-frequency trading interface that processes over 14 million data points per second with sub-5ms rendering latency.',
      tags: ['React/Go', 'WebSockets', 'Kubernetes'],
    },
    {
      layout: 'equal-right',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZfvQL49aFqG7K2Z-iaQGxNQJv5ATMs6mgSg7-A6-giUZihIxEZOnodWWKSSLX2Ttbo1GiC07U7uJw8wA5Qx2AJqCTkV8Ci0-Xe6_55_0YJO6mtlzzuL5VesxDGRJlNvU3kEMnPAEzw_6YT_a246_XZ0wGBWHo4LcQS5GH5ai0Ue0u9HTsG371Jk5MLI0yyZt-DTu1DGuRpp9rOU-td6vUeNjTj7Z8ZXMKPei4JqmehfeejovuySHOPTn1wxlpGgUsKAc1zStsoaDq',
      imageAlt: 'Vortex Flow Systems',
      category: 'Automation Logic',
      accent: 'primary',
      title: 'Vortex Flow Systems',
      description:
        'Global logistics engine utilizing predictive modeling to optimize supply chain routes in real-time for Fortune 500 conglomerates.',
      tags: ['Python', 'TensorFlow', 'AWS Lambda'],
    },
  ];
}
