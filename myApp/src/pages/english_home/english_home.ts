import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { RightsPage } from '../rights/rights';
import { ResponsibilitiesPage } from '../responsibilities/responsibilities';
import { PlanPage } from '../plan/plan';
import { YouthPage } from '../youth/youth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-english_home',
  templateUrl: 'english_home.html'
})
export class EnglishHomePage {

  rightsPage = RightsPage;
  responsibilitiesPage = ResponsibilitiesPage;
  planPage = PlanPage;
  youthPage = YouthPage;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  
  navToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  activateSpanishMenu(){
    this.menuCtrl.enable(true, 'spanishMenu');
    this.menuCtrl.enable(false, 'englishMenu');
  }

}