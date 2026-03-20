import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  EffectRef,
  ElementRef,
  inject,
  NgZone,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';

const SECTION_ID = 'services';
const LIFT_PX = 14;
const TYPEWRITER_MS = 2000;

/**
 * El scroll solo “enciende” la animación: al salir del hero se inicia un typewriter
 * de TYPEWRITER_MS (2 s) que no depende del scroll.
 */
@Component({
  selector: 'app-key-competencies-section',
  standalone: true,
  templateUrl: './key-competencies-section.html',
  styleUrl: './key-competencies-section.css',
})
export class KeyCompetenciesSectionComponent {
  protected readonly i18n = inject(I18nService);
  private readonly doc = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);

  /** Progreso 0–1 de la animación temporal (caret y estilos) */
  protected readonly typingProgress = signal(0);

  protected readonly titleText = signal('');
  protected readonly leftBodyText = signal('');
  protected readonly rightBodyText = signal('');

  protected readonly titleLift = signal(LIFT_PX);
  protected readonly leftLift = signal(LIFT_PX);
  protected readonly rightLift = signal(LIFT_PX);

  protected readonly titleOpacity = signal(0);
  protected readonly leftOpacity = signal(0);
  protected readonly rightOpacity = signal(0);

  private langEffectRef: EffectRef | null = null;
  private scrollTicking = false;
  private scrollHandler: (() => void) | null = null;
  private resizeHandler: (() => void) | null = null;
  private heroEl: HTMLElement | null = null;

  /** Ya se disparó la escritura (no repetir hasta cambio de idioma) */
  private playStarted = false;

  private typingRafId: ReturnType<typeof requestAnimationFrame> | null = null;

  protected readonly caretPhase = computed(() => {
    this.typingProgress();
    this.i18n.lang();
    if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'none' as const;
    }
    const title = this.i18n.t('keyCompetencies.title');
    const leftBody = this.i18n.t('keyCompetencies.leftBody');
    const rightBody = this.i18n.t('keyCompetencies.rightBody');
    const lenT = title.length;
    const lenL = leftBody.length;
    const lenR = rightBody.length;
    const total = Math.max(1, lenT + lenL + lenR);
    const u = Math.max(0, Math.min(1, this.typingProgress())) * total;
    const nT = Math.min(lenT, Math.floor(u));
    const nL = Math.min(lenL, Math.max(0, Math.floor(u - lenT)));
    const nR = Math.min(lenR, Math.max(0, Math.floor(u - lenT - lenL)));
    if (lenT > 0 && nT < lenT) {
      return 'title' as const;
    }
    if (lenL > 0 && nL < lenL) {
      return 'left' as const;
    }
    if (lenR > 0 && nR < lenR) {
      return 'right' as const;
    }
    return 'none' as const;
  });

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.cancelTypingAnimation();
      this.teardownScrollListeners();
      if (this.langEffectRef) {
        this.langEffectRef.destroy();
        this.langEffectRef = null;
      }
    });

    afterNextRender(() => {
      this.setupScrollListeners();
      this.langEffectRef = effect(() => {
        this.i18n.lang();
        this.cancelTypingAnimation();
        this.playStarted = false;
        this.resetVisualState();
        this.ngZone.run(() => this.checkHeroExit());
      });
    });
  }

  private teardownScrollListeners(): void {
    const win = this.doc.defaultView;
    if (!win) {
      return;
    }
    if (this.scrollHandler) {
      win.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = null;
    }
    if (this.resizeHandler) {
      win.removeEventListener('resize', this.resizeHandler);
      this.resizeHandler = null;
    }
  }

  private setupScrollListeners(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const win = this.doc.defaultView;
    if (!win) {
      return;
    }

    this.heroEl = this.doc.querySelector('.hero');

    const onScroll = (): void => {
      if (this.scrollTicking) {
        return;
      }
      this.scrollTicking = true;
      win.requestAnimationFrame(() => {
        this.scrollTicking = false;
        this.ngZone.run(() => this.checkHeroExit());
      });
    };

    const onResize = (): void => {
      this.ngZone.run(() => this.checkHeroExit());
    };

    this.scrollHandler = onScroll;
    this.resizeHandler = onResize;
    win.addEventListener('scroll', onScroll, { passive: true });
    win.addEventListener('resize', onResize, { passive: true });
    this.ngZone.run(() => this.checkHeroExit());
  }

  private cancelTypingAnimation(): void {
    if (this.typingRafId != null) {
      this.doc.defaultView?.cancelAnimationFrame(this.typingRafId);
      this.typingRafId = null;
    }
  }

  private resetVisualState(): void {
    this.typingProgress.set(0);
    this.titleText.set('');
    this.leftBodyText.set('');
    this.rightBodyText.set('');
    this.titleLift.set(LIFT_PX);
    this.leftLift.set(LIFT_PX);
    this.rightLift.set(LIFT_PX);
    this.titleOpacity.set(0);
    this.leftOpacity.set(0);
    this.rightOpacity.set(0);
  }

  /**
   * Scroll solo comprueba si el hero ya no se ve; entonces arranca la animación de 2 s una vez.
   */
  private checkHeroExit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const heroBottom = this.heroEl?.getBoundingClientRect().bottom ?? -1;
      if (heroBottom > 0) {
        if (!this.playStarted) {
          this.resetVisualState();
        }
        return;
      }
      if (!this.playStarted) {
        this.playStarted = true;
        this.applyTypingProgress(1);
      }
      return;
    }

    const heroBottom = this.heroEl?.getBoundingClientRect().bottom ?? -1;

    if (heroBottom > 0) {
      if (!this.playStarted) {
        this.applyTypingProgress(0);
      }
      return;
    }

    if (this.playStarted) {
      return;
    }

    this.playStarted = true;
    this.startTypewriterTwoSeconds();
  }

  private startTypewriterTwoSeconds(): void {
    this.cancelTypingAnimation();
    const start = performance.now();
    const win = this.doc.defaultView;
    if (!win) {
      return;
    }

    const tick = (now: number): void => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / TYPEWRITER_MS);
      this.ngZone.run(() => this.applyTypingProgress(p));
      if (p < 1) {
        this.typingRafId = win.requestAnimationFrame(tick);
      } else {
        this.typingRafId = null;
      }
    };

    this.typingRafId = win.requestAnimationFrame(tick);
  }

  private easeOutQuad(t: number): number {
    return 1 - (1 - t) * (1 - t);
  }

  private applyTypingProgress(progress: number): void {
    const p = Math.max(0, Math.min(1, progress));
    this.typingProgress.set(p);

    const title = this.i18n.t('keyCompetencies.title');
    const leftBody = this.i18n.t('keyCompetencies.leftBody');
    const rightBody = this.i18n.t('keyCompetencies.rightBody');
    const lenT = title.length;
    const lenL = leftBody.length;
    const lenR = rightBody.length;
    const total = Math.max(1, lenT + lenL + lenR);
    const u = p * total;

    const nT = Math.min(lenT, Math.floor(u));
    const nL = Math.min(lenL, Math.max(0, Math.floor(u - lenT)));
    const nR = Math.min(lenR, Math.max(0, Math.floor(u - lenT - lenL)));

    this.titleText.set(title.slice(0, nT));
    this.leftBodyText.set(leftBody.slice(0, nL));
    this.rightBodyText.set(rightBody.slice(0, nR));

    const tProg = lenT > 0 ? nT / lenT : 1;
    const lProg = lenL > 0 ? nL / lenL : 1;
    const rProg = lenR > 0 ? nR / lenR : 1;

    this.titleLift.set(lenT > 0 ? LIFT_PX * (1 - this.easeOutQuad(tProg)) : 0);
    this.titleOpacity.set(lenT === 0 ? 0 : nT > 0 ? 1 : 0);

    if (nT < lenT) {
      this.leftLift.set(LIFT_PX);
      this.leftOpacity.set(0);
      this.rightLift.set(LIFT_PX);
      this.rightOpacity.set(0);
      return;
    }

    this.leftLift.set(lenL > 0 ? LIFT_PX * (1 - this.easeOutQuad(lProg)) : 0);
    this.leftOpacity.set(lenL === 0 ? 0 : nL > 0 ? 1 : 0);

    if (nL < lenL) {
      this.rightLift.set(LIFT_PX);
      this.rightOpacity.set(0);
      return;
    }

    this.rightLift.set(lenR > 0 ? LIFT_PX * (1 - this.easeOutQuad(rProg)) : 0);
    this.rightOpacity.set(lenR === 0 ? 0 : nR > 0 ? 1 : 0);
  }
}
