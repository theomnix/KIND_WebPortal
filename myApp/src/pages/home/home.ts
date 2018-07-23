import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navToRights(){
      console.log("navToRights clicked")
  }
  navToResponsibilities(){
    console.log("navToResponsibilities clicked")
  }
  navToPlan(){
    console.log("navToPlan clicked")
  }
  navToYouth(){
    console.log("navToYouth clicked")
  }
}
