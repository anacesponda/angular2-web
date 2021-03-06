import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import {UnitComponent} from "./unit/unit.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'unit', component: UnitComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
