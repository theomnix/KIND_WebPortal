import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { EnglishResponsibilitiesPage } from '../english_responsibilities/english_responsibilities';

@Component({
  selector: 'page-responsibilities',
  templateUrl: 'responsibilities.html'
})
export class ResponsibilitiesPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  navToEnglishResponsibilities(){
    this.navCtrl.setRoot(EnglishResponsibilitiesPage);
  }

  activateEnglishMenu(){
    this.menuCtrl.enable(true, 'englishMenu');
    this.menuCtrl.enable(false, 'spanishMenu');
  }
}
