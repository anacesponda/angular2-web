import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { routing }       from './unit-details.routing';
import {UnitDetailsComponent} from "./unit-details.component";



@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    FormsModule,
    routing
  ],
  declarations: [
    UnitDetailsComponent,
  ]
})
export default class UnitDetailsModule {
}
