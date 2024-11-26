import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage {
  scannedData: string | null = null;

  constructor(private alertCtrl: AlertController) {}

  async startScan() {
    try {
      // Verificar permiso
      const permission = await BarcodeScanner.checkPermission({ force: true });

      if (!permission.granted) {
        await this.showAlert('Permiso no concedido para usar la cámara.');
        return;
      }

      // Ocultar la vista web para mostrar la cámara
      BarcodeScanner.hideBackground();

      // Iniciar escaneo
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scannedData = result.content;
        await this.showAlert(`Datos escaneados: ${this.scannedData}`);
      } else {
        this.scannedData = null;
      }
    } catch (error) {
      console.error('Error durante el escaneo:', error);
      await this.showAlert('Error durante el escaneo. Por favor, inténtalo de nuevo.');
    } finally {
      // Mostrar la vista web nuevamente
      BarcodeScanner.showBackground();
    }
  }

  async stopScan() {
    await BarcodeScanner.stopScan();
  }

  private async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Información',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
