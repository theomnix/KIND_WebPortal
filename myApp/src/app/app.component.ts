import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RightsPage } from '../pages/rights/rights';
import { ResponsibilitiesPage } from '../pages/responsibilities/responsibilities';
import { PlanPage } from '../pages/plan/plan';
import { YouthPage } from '../pages/youth/youth';

import { EnglishHomePage } from '../pages/english_home/english_home';
import { EnglishRightsPage } from '../pages/english_rights/english_rights';
import { EnglishResponsibilitiesPage } from '../pages/english_responsibilities/english_responsibilities';
import { EnglishPlanPage } from '../pages/english_plan/english_plan';
import { EnglishYouthPage } from '../pages/english_youth/english_youth';


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
  navToHome(){
    this.nav.setRoot(HomePage);
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
  navToEnglishHome(){
    this.nav.setRoot(EnglishHomePage);
  }
  navToEnglishRights(){
    this.nav.setRoot(EnglishRightsPage);
  }
  navToEnglishResponsibilities(){
    this.nav.setRoot(EnglishResponsibilitiesPage);
  }
  navToEnglishPlan(){
    this.nav.setRoot(EnglishPlanPage);
  }
  navToEnglishYouth(){
    this.nav.setRoot(EnglishYouthPage);
  }

}