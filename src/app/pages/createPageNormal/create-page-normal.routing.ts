import { Routes, RouterModule }  from '@angular/router';

import { CreatePageNormalComponent} from './create-page-normal.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CreatePageNormalComponent,
    // children: [
    //   { path: 'inputs', component: Inputs },
    //   { path: 'layouts', component: Layouts }
    // ]
  }
];

export const routing = RouterModule.forChild(routes);
