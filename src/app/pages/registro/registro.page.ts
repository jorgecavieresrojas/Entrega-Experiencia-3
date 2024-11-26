import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.registroForm.valid) {
      const { username, email, password } = this.registroForm.value;

      this.authService.register(username, email, password).subscribe(
        async () => {
          const alert = await this.alertCtrl.create({
            header: 'Registro Exitoso',
            message: 'El usuario ha sido registrado exitosamente.',
            buttons: ['OK'],
          });
          await alert.present();
          this.router.navigate(['/login']);
        },
        async () => {
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'Hubo un error al registrar el usuario.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos correctamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
