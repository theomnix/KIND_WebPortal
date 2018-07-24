import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { RightsPage } from '../rights/rights';
import { ResponsibilitiesPage } from '../responsibilities/responsibilities';
import { PlanPage } from '../plan/plan';
import { YouthPage } from '../youth/youth';
import { EnglishHomePage } from '../english_home/english_home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rightsPage = RightsPage;
  responsibilitiesPage = ResponsibilitiesPage;
  planPage = PlanPage;
  youthPage = YouthPage;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  navToEnglishHome(){
  	this.navCtrl.setRoot(EnglishHomePage);
  }

  activateEnglishMenu(){
    this.menuCtrl.enable(true, 'englishMenu');
    this.menuCtrl.enable(false, 'spanishMenu');
  }
}