import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, Event } from '../../services/event.service';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.page.html',
  styleUrls: ['./listevent.page.scss'],
})
export class ListeventPage implements OnInit {
  events: Event[] = []; // Tipo de datos definido correctamente

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.getEvents(); // Cargar eventos al iniciar
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }

  editEvent(id: number) {
    // Redirigir al componente de edición con el ID del evento
    this.router.navigate(['/editaeliminaevento', id]);
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe(
      () => {
        // Eliminar del array local después de éxito
        this.events = this.events.filter((event) => event.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el evento:', error);
      }
    );
  }
}
