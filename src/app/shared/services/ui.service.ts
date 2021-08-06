import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public loading: HTMLIonLoadingElement;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController
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
    color: string = 'primary',
    duration = 2000
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
}
