import { bootstrapApplication } from '@angular/platform-browser';
import { inject as injectVercelAnalytics } from '@vercel/analytics';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';

registerLocaleData(localeEsPe);

bootstrapApplication(App, appConfig)
  .then(() => {
    injectVercelAnalytics({ framework: 'angular' });
  })
  .catch((err) => console.error(err));
