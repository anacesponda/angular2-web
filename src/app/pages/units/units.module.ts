import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';
import {UnitService} from "./unit/unit.service";
import {Unit} from "./unit/unit.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [

    Dashboard,
    Unit,
  ],
  providers: [
    UnitService,
  ]
})
export default class DashboardModule {}
