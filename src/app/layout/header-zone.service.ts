import { Injectable, signal } from '@angular/core';

/**
 * El scroll de secciones con fondo invertido informa al header (portfolio, gancho, …).
 */
@Injectable({ providedIn: 'root' })
export class HeaderZoneService {
  /** El usuario tiene la sección #portfolio en la zona del header */
  readonly inPortfolioSection = signal(false);
  /** El usuario tiene la sección #hook en la zona del header */
  readonly inGanchoSection = signal(false);
}
