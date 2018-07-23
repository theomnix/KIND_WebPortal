import { Component } from '@angular/core';

import { RightsPage } from '../rights/rights';
import { ResponsibilitiesPage } from '../responsibilities/responsibilities';
import { PlanPage } from '../plan/plan';
import { YouthPage } from '../youth/youth';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RightsPage;
  tab3Root = ResponsibilitiesPage;
  tab4Root = PlanPage;
  tab5Root = YouthPage;

  constructor() {

  }
}
