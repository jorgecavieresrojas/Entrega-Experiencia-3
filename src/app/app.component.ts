import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  closeMenu() {
    this.menu.close();
  }

  logout() {
    // Limpia la sesión y redirige al login
    localStorage.clear(); // Puedes usar otro método según tu implementación
    this.router.navigate(['/login']);
  }
}
