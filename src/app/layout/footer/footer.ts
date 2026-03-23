import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  private readonly theme = inject(ThemeService);

  /** Misma lógica que el header (sin zona portfolio): claro → logo oscuro, oscuro → logo claro */
  protected readonly footerLogoSrc = computed(() =>
    this.theme.theme() === 'dark'
      ? 'image-logo/logo_blanco_sin_fondo.png'
      : 'image-logo/logo_negro_sin_fondo.png',
  );
}
