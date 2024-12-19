import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {
    // Inicializa el formulario
    this.perfilForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Cargar los datos del usuario actual
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.perfilForm.patchValue({
        username: currentUser.username,
        email: currentUser.email,
        password: '', // No se debe cargar la contraseña real por razones de seguridad
      });
    }
  }

  async onSubmit() {
    if (this.perfilForm.valid) {
      const updatedUser: User = {
        ...this.authService.getCurrentUser(),
        ...this.perfilForm.value,
      };

      this.authService.updateUser(updatedUser).subscribe(
        async () => {
          const alert = await this.alertCtrl.create({
            header: 'Éxito',
            message: 'Tu perfil ha sido actualizado correctamente.',
            buttons: ['OK'],
          });
          await alert.present();
        },
        async (error) => {
          console.error('Error al actualizar el perfil:', error);
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'Hubo un problema al actualizar tu perfil. Inténtalo de nuevo.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    }
  }
}
