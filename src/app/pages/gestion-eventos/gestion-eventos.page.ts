import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-eventos',
  templateUrl: './gestion-eventos.page.html',
  styleUrls: ['./gestion-eventos.page.scss'],
})
export class GestionEventosPage implements OnInit {

  constructor(private location: Location,
              private menucontroller: MenuController,
              private router: Router
  ) { }

  ngOnInit() {}

  // Función para regresar a la página anterior
  goBack() {
    this.location.back(); // Regresa a la página anterior
  }
  mostrarMenu(){
    this.menucontroller.open('first'); /*permite abrir el menú diseñado en el componente app*/
  }
    // Redirige a la página de listado de eventos
    goToListadoEventos() {
      this.router.navigate(['/listevent']);
    }
  
    // Redirige a la página del formulario para crear un evento
    goToCrearEvento() {
      this.router.navigate(['/creaevento']);
    }  
    // Redirige a la página para editar o eliminar un evento
    goToEditarEliminarEvento() {
      this.router.navigate(['/editaeliminaevento']);
    }
}
