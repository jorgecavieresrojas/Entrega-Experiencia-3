import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    // Configurar el formulario reactivo
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required], // Puede ser username o email
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;
      this.authService.login(identifier, password).subscribe(
        async (isAuthenticated) => {
          if (isAuthenticated) {
            const alert = await this.alertCtrl.create({
              header: 'Bienvenido',
              message: `¡Hola!`,
              buttons: ['OK'],
            });
            await alert.present();
            this.router.navigate(['/inicio']);
          } else {
            const alert = await this.alertCtrl.create({
              header: 'Error',
              message: 'Usuario o contraseña incorrectos.',
              buttons: ['OK'],
            });
            await alert.present();
          }
        },
        async (error) => {
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'Ocurrió un problema al intentar iniciar sesión. Por favor, intenta más tarde.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  goToRegistro() {
    this.router.navigate(['/registro']);
  }
}
