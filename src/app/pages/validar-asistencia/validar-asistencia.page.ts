import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-validar-asistencia',
  templateUrl: './validar-asistencia.page.html',
  styleUrls: ['./validar-asistencia.page.scss'],
})
export class ValidarAsistenciaPage {
  isScanning = false; // Controla el estado del escáner

  constructor(private alertController: AlertController) {}

  // Método para iniciar el escaneo de códigos QR
  async validarAsistencia() {
    // Verificar permisos de cámara
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // Habilitar el escáner
      this.isScanning = true;
      BarcodeScanner.hideBackground(); // Ocultar la interfaz de la app mientras se escanea

      // Iniciar el escaneo
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.isScanning = false; // Detener el escáner
        // Mostrar el contenido del código QR escaneado
        this.showAlert('Código Escaneado', result.content);
      }
    } else {
      this.showAlert(
        'Permiso Denegado',
        'Por favor, habilita el acceso a la cámara para validar la asistencia.'
      );
    }
  }

  // Mostrar alertas al usuario
  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
