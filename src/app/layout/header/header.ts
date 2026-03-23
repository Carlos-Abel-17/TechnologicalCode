import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  NgZone,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderZoneService } from '../header-zone.service';
import { ThemeService } from '../../theme/theme.service';

/** Píxeles de scroll antes de activar el fondo tipo cristal (estilo barra iOS). */
const HEADER_GLASS_SCROLL_PX = 10;

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly theme = inject(ThemeService);
  protected readonly headerZone = inject(HeaderZoneService);

  /** `true` cuando el usuario ha hecho scroll: barra con blur y capa semitransparente. */
  protected readonly headerGlass = signal(false);

  protected readonly themeToggleKey = computed(() =>
    this.theme.theme() === 'dark' ? 'header.theme.light' : 'header.theme.dark',
  );

  protected readonly headerLogoSrc = computed(() => {
    const inInvertedZone = this.headerZone.inPortfolioSection() || this.headerZone.inGanchoSection();
    const isDark = this.theme.theme() === 'dark';
    if (inInvertedZone) {
      return isDark ? 'image-logo/logo_negro_sin_fondo.png' : 'image-logo/logo_blanco_sin_fondo.png';
    }
    return isDark ? 'image-logo/logo_blanco_sin_fondo.png' : 'image-logo/logo_negro_sin_fondo.png';
  });

  constructor() {
    afterNextRender(() => this.setupScrollGlass());
  }

  protected toggleTheme(): void {
    this.theme.toggle();
  }

  private setupScrollGlass(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const win = this.doc.defaultView;
    if (!win) {
      return;
    }

    let ticking = false;

    const apply = (): void => {
      const y = win.scrollY ?? this.doc.documentElement.scrollTop ?? 0;
      const next = y > HEADER_GLASS_SCROLL_PX;
      if (next !== this.headerGlass()) {
        this.ngZone.run(() => this.headerGlass.set(next));
      }
    };

    const onScroll = (): void => {
      if (ticking) {
        return;
      }
      ticking = true;
      win.requestAnimationFrame(() => {
        ticking = false;
        apply();
      });
    };

    apply();
    win.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => win.removeEventListener('scroll', onScroll));
  }
}
