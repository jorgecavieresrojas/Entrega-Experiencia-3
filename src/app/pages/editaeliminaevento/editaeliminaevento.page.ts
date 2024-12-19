import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, Event } from '../../services/event.service';

@Component({
  selector: 'app-editaeliminaevento',
  templateUrl: './editaeliminaevento.page.html',
  styleUrls: ['./editaeliminaevento.page.scss'],
})
export class EditaeliminaeventoPage implements OnInit {
  event: Event = {
    id: 0,
    name: '',
    date: '',
    location: '',
    description: '',
    image: '',
  };

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventById(id).subscribe(
      (data) => {
        this.event = data;
      },
      (error) => {
        console.error('Error al cargar el evento:', error);
      }
    );
  }

  updateEvent() {
    this.eventService.updateEvent(this.event).subscribe(
      () => {
        this.router.navigate(['/listevent']); // Redirigir al listado después de éxito
      },
      (error) => {
        console.error('Error al actualizar el evento:', error);
      }
    );
  }

  deleteEvent() {
    this.eventService.deleteEvent(this.event.id).subscribe(
      () => {
        this.router.navigate(['/listevent']); // Redirigir al listado después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el evento:', error);
      }
    );
  }
}
