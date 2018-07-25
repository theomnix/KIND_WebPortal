import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  constructor(public navCtrl: NavController) {

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

}
