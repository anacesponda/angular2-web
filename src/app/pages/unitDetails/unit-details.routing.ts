import { Routes, RouterModule }  from '@angular/router';

import { UnitDetailsComponent} from './unit-details.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import {CreatePageNormalComponent} from "../createPageNormal/create-page-normal.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: UnitDetailsComponent,
    children: [
      { path: 'templates', component: CreatePageNormalComponent },
      // { path: 'layouts', component: Layouts }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
