import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, Event } from '../../services/event.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-creaevento',
  templateUrl: './creaevento.page.html',
  styleUrls: ['./creaevento.page.scss'],
})
export class CreaeventoPage {
  event: Event = {
    id: 0,
    name: '',
    date: '',
    location: '',
    description: '',
    image: '',
  };

  constructor(
    private eventService: EventService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async createEvent() {
    this.eventService.createEvent(this.event).subscribe(async () => {
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Evento creado exitosamente.',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/listevent']);
    });
  }
}
