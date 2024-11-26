import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creaevento',
  templateUrl: './creaevento.page.html',
  styleUrls: ['./creaevento.page.scss'],
})
export class CreaeventoPage implements OnInit {

  evento = {
    nombre: '',
    fecha: '',
    ubicacion: '',
    descripcion: ''
};

  constructor(private location: Location,
    private menucontroller: MenuController,
    private router: Router) { }

  ngOnInit() {
  }

    // Método para crear el evento
    crearEvento() {
      console.log('Evento creado:', this.evento);
    }
    goBack() {
      this.location.back(); // Regresa a la página anterior
    }
    mostrarMenu(){
      this.menucontroller.open('first'); /*permite abrir el menú diseñado en el componente app*/
    }
}
