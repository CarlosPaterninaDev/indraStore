import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) sliceEl: IonSlides;

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 1.5,
    freeMode: true,
    loop: true,
  };

  constructor() {}

  ionViewWillEnter() {
    this.sliceEl.startAutoplay();
  }
}
