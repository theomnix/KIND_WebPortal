import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RightsPage } from '../pages/rights/rights';
import { ResponsibilitiesPage } from '../pages/responsibilities/responsibilities';
import { PlanPage } from '../pages/plan/plan';
import { YouthPage } from '../pages/youth/youth';
import { HomePage } from '../pages/home/home';
import { EnglishHomePage } from '../pages/english_home/english_home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RightsPage,
    ResponsibilitiesPage,
    PlanPage,
    YouthPage,
    HomePage,
    EnglishHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RightsPage,
    ResponsibilitiesPage,
    PlanPage,
    YouthPage,
    HomePage,
    EnglishHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
