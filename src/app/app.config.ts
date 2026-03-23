import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

import { routes } from './app.routes';

const TC_LANG_STORAGE = 'tc-lang';

function initTranslations(translate: TranslateService) {
  return () => {
    let lang: 'en' | 'es' = 'es';
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(TC_LANG_STORAGE);
      if (stored === 'en' || stored === 'es') {
        lang = stored;
      }
    } else if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('en')) {
      lang = 'en';
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    translate.addLangs(['en', 'es']);
    translate.setFallbackLang('es');
    return firstValueFrom(translate.use(lang));
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    ...provideTranslateService({ fallbackLang: 'es' }),
    ...provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslations,
      deps: [TranslateService],
      multi: true,
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
