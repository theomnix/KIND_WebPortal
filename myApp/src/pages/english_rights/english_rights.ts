import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { RightsPage } from '../rights/rights';

@Component({
  selector: 'page-english_rights',
  templateUrl: 'english_rights.html'
})
export class EnglishRightsPage {
  
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  navToRights(){
    this.navCtrl.setRoot(RightsPage);
  }

  activateSpanishMenu(){
    this.menuCtrl.enable(true, 'spanishMenu');
    this.menuCtrl.enable(false, 'englishMenu');
  }
}
