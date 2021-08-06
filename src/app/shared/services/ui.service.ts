import { Injectable } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public loading: HTMLIonLoadingElement;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  async presentLoading(
    message: string = 'Cargando información...'
  ): Promise<void> {
    this.loading = await this.loadingController.create({
      message,
      mode: 'ios',
      animated: true,
      spinner: 'bubbles',
      translucent: true,
      backdropDismiss: false,
    });

    await this.loading.present();
  }

  async presentToast(
    message: string = 'Toast Bottom',
    color: string = 'secondary',
    duration = 1200
  ): Promise<void> {
    const toast = await this.toastController.create({
      color,
      mode: 'ios',
      animated: true,
      message,
      position: 'bottom',
      duration,
    });

    toast.present();
  }

  async alertConfirm(header: string, message: string, backdrop = true) {
    let respuesta = null;

    const alertConfirm = await this.alertController.create({
      header,
      message,
      backdropDismiss: backdrop,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => (respuesta = false),
        },
        {
          text: 'Aceptar',
          handler: () => (respuesta = true),
        },
      ],
    });

    await alertConfirm.present();

    await alertConfirm.onDidDismiss();

    return new Promise((resolve) => {
      resolve(respuesta);
    });
  }
}
