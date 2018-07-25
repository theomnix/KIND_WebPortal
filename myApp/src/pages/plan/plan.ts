import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { EnglishPlanPage } from '../english_plan/english_plan';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

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

  navToEnglishPlan(){
    this.navCtrl.setRoot(EnglishPlanPage);
  }

  activateEnglishMenu(){
    this.menuCtrl.enable(true, 'englishMenu');
    this.menuCtrl.enable(false, 'spanishMenu');
  }

}
