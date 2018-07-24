import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RightsPage } from '../pages/rights/rights';	
import { ResponsibilitiesPage } from '../pages/responsibilities/responsibilities';	
import { PlanPage } from '../pages/plan/plan';	
import { YouthPage } from '../pages/youth/youth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  rightsPage = RightsPage;
  responsibilitiesPage = ResponsibilitiesPage;
  planPage = PlanPage;
  youthPage = YouthPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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
  navToContact(){
    console.log("navToContact clicked");
  }
}
