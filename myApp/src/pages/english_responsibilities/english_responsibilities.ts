import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { ResponsibilitiesPage } from '../responsibilities/responsibilities';

@Component({
  selector: 'page-english_responsibilities',
  templateUrl: 'english_responsibilities.html'
})
export class EnglishResponsibilitiesPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  navToResponsibilities(){
    this.navCtrl.setRoot(ResponsibilitiesPage);
  }

  activateSpanishMenu(){
    this.menuCtrl.enable(true, 'spanishMenu');
    this.menuCtrl.enable(false, 'englishMenu');
  }

}
