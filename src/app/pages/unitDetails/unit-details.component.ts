import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {Unit} from "../dashboard/unit-model";
import {UnitService} from "../dashboard/unit/unit.service";
import {Params, ActivatedRoute, Router} from "@angular/router";
import { Location }               from '@angular/common';

@Component({
  selector: 'unit-details',
  templateUrl: 'unit-details.html',
})
export class UnitDetailsComponent {
  unit: Unit;

  constructor( private unitService: UnitService,
               private route: ActivatedRoute,
               private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.unitService.getUnit(+params['id']))
      .subscribe(unit => {console.log(unit); this.unit = unit});
  }

  save(): void {
    this.unitService.update(this.unit)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  onViewDetails(){
    let link = ['../../pages/units/1/templates'];
    this.router.navigate(link).then(()=>{console.log('ENTRA A THEN')})
      .catch((error) => {
        console.log("erroooor", error);
      });;
  }
}
