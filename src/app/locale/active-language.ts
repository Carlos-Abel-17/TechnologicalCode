import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { merge, of } from 'rxjs';
import { map } from 'rxjs/operators';
import type { Lang } from '../i18n/translations';

/**
 * Idioma activo como señal (p. ej. efectos que dependan del locale con ngx-translate).
 */
@Injectable({ providedIn: 'root' })
export class ActiveLanguage {
  private readonly translate = inject(TranslateService);

  readonly code = toSignal(
    merge(
      of(this.translate.getCurrentLang()),
      this.translate.onLangChange.pipe(map((e) => e.lang)),
    ),
    { initialValue: this.translate.getCurrentLang() },
  ) as unknown as () => Lang;
}
