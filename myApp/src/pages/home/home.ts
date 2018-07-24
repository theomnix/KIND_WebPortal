import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RightsPage } from '../rights/rights';
import { ResponsibilitiesPage } from '../responsibilities/responsibilities';
import { PlanPage } from '../plan/plan';
import { YouthPage } from '../youth/youth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rightsPage = RightsPage;
  responsibilitiesPage = ResponsibilitiesPage;
  planPage = PlanPage;
  youthPage = YouthPage;

  constructor(public navCtrl: NavController) {

  }

}
