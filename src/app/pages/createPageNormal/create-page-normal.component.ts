import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {UnitService} from "../dashboard/unit/unit.service";
import {Params, ActivatedRoute} from "@angular/router";
import { Location }               from '@angular/common';
import {Page} from "../models/page-model";
import {Unit} from "../dashboard/unit-model";

@Component({
  selector: 'unit-details',
  templateUrl: 'create-page-normal.html',
})
export class CreatePageNormalComponent {
  page: Page;
  unit: Unit;

  constructor( private unitService: UnitService,
               private route: ActivatedRoute,
               private location: Location) {
    this.page = new Page();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.unitService.getUnit(+params['id']))
      .subscribe(unit => {console.log(unit); this.unit = unit});
  }

  save(text: string): void {
    this.page.pageObject = text;
    this.page.templateType = 'basicPage';
    this.page.UnitId = 1;
    this.unitService.createPage(this.page)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
