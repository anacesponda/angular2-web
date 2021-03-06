import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { routing }       from './unit-details.routing';
import {UnitDetailsComponent} from "./unit-details.component";
import {PageComponent} from "./page-list/page.component";
import {PageService} from "./page-list/page.service";



@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    FormsModule,
    routing
  ],
  declarations: [
    UnitDetailsComponent,
    PageComponent
  ],
  providers: [
    PageService,
  ]
})
export default class UnitDetailsModule {
}
