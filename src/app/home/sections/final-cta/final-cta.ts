import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

const WHATSAPP_E164 = '51983446294';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCtaSectionComponent {
  protected readonly whatsappHref = `https://wa.me/${WHATSAPP_E164}`;
}
