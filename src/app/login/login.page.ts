import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  emailError: string = '';
  isButtonDisabled: boolean = true;

  constructor(private router: Router) {}

  // Valida el formato del email
  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.email)) {
      this.emailError = 'Por favor, ingrese un correo válido';
      this.isButtonDisabled = true;
    } else {
      this.emailError = '';
      this.isButtonDisabled = false;
    }
  }

  // Redirige a "Inicio" y pasa el email como parámetro
  loginUser() {
    if (!this.isButtonDisabled) {
      this.router.navigate(['/inicio'], { queryParams: { email: this.email } });
    }
  }

  // Navega a la página de registro
  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  // Navega a la página de "Olvido"
  goToOlvido() {
    this.router.navigate(['/olvido']);
  }
}
