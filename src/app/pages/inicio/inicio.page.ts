import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = 'Usuario'; // Valor predeterminado

  constructor(
    private menuController: MenuController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserData();
  }

  // Carga los datos del usuario autenticado
  loadUserData() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username; // Asigna el nombre del usuario autenticado
    }
  }

  mostrarMenu() {
    this.menuController.open('first'); // Abre el menú
  }

  logout() {
    this.authService.logout(); // Cierra sesión en el servicio de autenticación
    this.router.navigate(['/login']); // Redirige al login
  }
}
