import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { routing }       from './create-page-normal.routing';
import {CreatePageNormalComponent} from "./create-page-normal.component";
import {Ckeditor} from "./ckeditor/ckeditor.component";
import {CKEditorModule} from "ng2-ckeditor";




@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    FormsModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    CreatePageNormalComponent,
    Ckeditor
  ]
})
export default class CreatePageNormalModule {
}
