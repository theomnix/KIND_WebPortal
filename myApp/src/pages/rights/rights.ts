import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { EnglishRightsPage } from '../english_rights/english_rights';

@Component({
  selector: 'page-rights',
  templateUrl: 'rights.html'
})
export class RightsPage {
  
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  navToEnglishRights(){
    this.navCtrl.setRoot(EnglishRightsPage);
  }

  activateEnglishMenu(){
    this.menuCtrl.enable(true, 'englishMenu');
    this.menuCtrl.enable(false, 'spanishMenu');
  }

}
