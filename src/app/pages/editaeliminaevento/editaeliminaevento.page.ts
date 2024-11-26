import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editaeliminaevento',
  templateUrl: './editaeliminaevento.page.html',
  styleUrls: ['./editaeliminaevento.page.scss'],
})
export class EditaeliminaeventoPage implements OnInit {

  eventos = [
    {
      nombre: 'Evento 1',
      fecha: '2024-09-10'
    },
    {
      nombre: 'Evento 2',
      fecha: '2024-09-11'
    },
    {
      nombre: 'Evento 3',
      fecha: '2024-09-12'
    }
  ];

  filteredEventos = this.eventos;
  searchTerm: string = '';

  constructor(
    private location: Location,
    private menuController: MenuController,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  // Función para regresar a la página anterior
  goBack() {
    this.location.back(); // Regresa a la página anterior
  }

  // Función para abrir el menú
  mostrarMenu() {
    this.menuController.open('first'); // Permite abrir el menú diseñado en el componente app
  }

  // Filtrar eventos según el término de búsqueda
  filtrarEventos(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredEventos = this.eventos.filter(evento => {
      return evento.nombre.toLowerCase().includes(searchTerm);
    });
  }

  // Función para mostrar las opciones de editar o eliminar
  async opcionesEvento(evento: any) {
    const alert = await this.alertController.create({
      header: 'Acciones',
      message: `¿Qué deseas hacer con ${evento.nombre}?`,
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            console.log('Editar', evento.nombre);
            // Lógica de edición aquí
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Eliminar', evento.nombre);
            // Lógica de eliminación aquí
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
}
