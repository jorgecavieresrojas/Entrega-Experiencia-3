import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuController, AlertController } from '@ionic/angular';
import { EventoService } from '../../services/evento.service';

// Definir la interfaz para los eventos
interface Evento {
  id: string;
  nombre: string;
  fecha: string;
  lugar?: string; // Opcional
}

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.page.html',
  styleUrls: ['./listevent.page.scss'],
})
export class ListeventPage implements OnInit {
  eventos: Evento[] = []; // Lista completa de eventos cargados desde el JSON
  filteredEventos: Evento[] = []; // Lista filtrada para búsqueda
  searchTerm: string = ''; // Término de búsqueda
  userId = '1'; // ID del usuario actual (simulado)

  constructor(
    private location: Location,
    private menucontroller: MenuController,
    private eventoService: EventoService, // Inyección del servicio de eventos
    private alertController: AlertController // Controlador de alertas
  ) {}

  ngOnInit() {
    this.loadEvents(); // Cargar eventos al inicializar el componente
  }

  // Cargar eventos desde el archivo JSON
  loadEvents() {
    this.eventoService.getEventos().subscribe((data: Evento[]) => {
      this.eventos = data; // Carga los eventos
      this.filteredEventos = [...this.eventos]; // Inicializa la lista filtrada
    });
  }

  // Registrar al usuario en un evento
  async registerToEvent(evento: Evento) {
    this.eventoService
      .checkUserRegistration(this.userId, evento.id)
      .subscribe(async (isRegistered) => {
        if (isRegistered) {
          // Mostrar alerta si ya está registrado
          this.showAlert('Error', 'Ya estás registrado en este evento.');
        } else {
          // Registrar al usuario en el evento
          const registro = {
            userId: this.userId,
            ...evento,
          };

          this.eventoService.registrarEvento(registro).subscribe(() => {
            this.showAlert('Éxito', 'Te has registrado al evento.');
          });
        }
      });
  }

  // Mostrar alertas al usuario
  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Filtrar eventos según el término de búsqueda
  filtrarEventos(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredEventos = this.eventos.filter((evento) => {
      return evento.nombre.toLowerCase().includes(searchTerm);
    });
  }

  // Función para regresar a la página anterior
  goBack() {
    this.location.back(); // Regresa a la página anterior
  }

  // Función para abrir el menú
  mostrarMenu() {
    this.menucontroller.open('first'); // Permite abrir el menú diseñado en el componente app
  }
}
