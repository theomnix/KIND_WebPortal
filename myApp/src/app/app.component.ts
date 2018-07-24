import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RightsPage } from '../pages/rights/rights';
import { ResponsibilitiesPage } from '../pages/responsibilities/responsibilities';
import { PlanPage } from '../pages/plan/plan';
import { YouthPage } from '../pages/youth/youth';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
  navToRights(){
      this.nav.setRoot(RightsPage);
  }
  navToResponsibilities(){
    this.nav.setRoot(ResponsibilitiesPage);
  }
  navToPlan(){
    this.nav.setRoot(PlanPage);
  }
  navToYouth(){
    this.nav.setRoot(YouthPage);
  }
  navToContact(page){
    this.nav.setRoot(ContactPage);
  }
}