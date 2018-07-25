import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RightsPage } from '../pages/rights/rights';
import { ResponsibilitiesPage } from '../pages/responsibilities/responsibilities';
import { PlanPage } from '../pages/plan/plan';
import { YouthPage } from '../pages/youth/youth';
import { HomePage } from '../pages/home/home';

import { EnglishRightsPage } from '../pages/english_rights/english_rights';
import { EnglishResponsibilitiesPage } from '../pages/english_responsibilities/english_responsibilities';
import { EnglishPlanPage } from '../pages/english_plan/english_plan';
import { EnglishYouthPage } from '../pages/english_youth/english_youth';
import { EnglishHomePage } from '../pages/english_home/english_home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    RightsPage,
    ResponsibilitiesPage,
    PlanPage,
    YouthPage,
    HomePage,
    EnglishRightsPage,
    EnglishResponsibilitiesPage,
    EnglishPlanPage,
    EnglishYouthPage,
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
    EnglishRightsPage,
    EnglishResponsibilitiesPage,
    EnglishPlanPage,
    EnglishYouthPage,
    EnglishHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
