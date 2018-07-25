import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { PlanPage } from '../plan/plan';

@Component({
  selector: 'page-english_plan',
  templateUrl: 'english_plan.html'
})
export class EnglishPlanPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  toggleBox(e: any){
    if (e.path[0].attributes.checked.value == "false"){
      e.path[0].attributes.checked.value = "true";
      e.path[0].src = "/assets/imgs/Check.png";
    }
    else{
      e.path[0].attributes.checked.value = "false";
      e.path[0].src = "/assets/imgs/Box.png";
    }
  }

  navToPlan(){
    this.navCtrl.setRoot(PlanPage);
  }

  activateSpanishMenu(){
    this.menuCtrl.enable(true, 'spanishMenu');
    this.menuCtrl.enable(false, 'englishMenu');
  }

}
