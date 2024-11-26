import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-asistencia',
  templateUrl: './validar-asistencia.page.html',
  styleUrls: ['./validar-asistencia.page.scss'],
})
export class ValidarAsistenciaPage implements OnInit {

  constructor(
    private location: Location,
    private menucontroller: MenuController,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  // Función para regresar a la página anterior
  goBack() {
    this.location.back(); 
  }

  // Función para mostrar el menú
  mostrarMenu() {
    this.menucontroller.open('first'); 
  }

  // Redirigir a la página de listado de asistentes
  goToListadoAsistentes() {
    this.router.navigate(['/listado-asistentes']);
  }

  // Mostrar mensaje al validar asistencia
  async validarAsistencia() {
    const toast = await this.toastController.create({
      message: 'Aquí debería abrirse la cámara',
      duration: 2000, // Duración de 2 segundos
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }
}
