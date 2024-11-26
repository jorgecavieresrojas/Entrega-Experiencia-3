import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listado-asistentes',
  templateUrl: './listado-asistentes.page.html',
  styleUrls: ['./listado-asistentes.page.scss'],
})
export class ListadoAsistentesPage implements OnInit {

  asistentes = [
    { nombre: 'Álvaro López', evento: 'Evento 1' },
    { nombre: 'Jorge Gónzalez', evento: 'Evento 2' },
    { nombre: 'Gonzalo López', evento: 'Evento 3' },
    { nombre: 'Francisca Valenzuela', evento: 'Evento 1' },
    { nombre: 'Mauricio Durán', evento: 'Evento 2' },
    { nombre: 'Francisco Durán', evento: 'Evento 3' },
    { nombre: 'Jorge Gonzalez', evento: 'Evento 1' },
    { nombre: 'Titae Lindl', evento: 'Evento 3' } 
  ];

  filteredAsistentes = this.asistentes;
  searchTerm: string = '';

  constructor(private location: Location, private menuController: MenuController) {}

  ngOnInit() {}

  // Función para regresar a la página anterior
  goBack() {
    this.location.back();
  }

  // Función para abrir el menú lateral
  mostrarMenu() {
    this.menuController.open('first');
  }

  // Filtrar asistentes según el término de búsqueda
  filtrarAsistentes(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredAsistentes = this.asistentes.filter(asistente => {
      return asistente.nombre.toLowerCase().includes(searchTerm) || asistente.evento.toLowerCase().includes(searchTerm);
    });
  }
}
