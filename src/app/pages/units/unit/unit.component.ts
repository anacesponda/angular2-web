import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import {UnitService} from './unit.service';
import {UnitModel} from "../unit-model";

@Component({
  selector: 'unit',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./unit.scss')],
  template: require('./unit.html'),
  providers: [UnitService]
})
export class Unit implements OnInit{
  units: UnitModel[];

  public dashboardColors = this._baConfig.get().colors.dashboard;

  public unitList:Array<any>;
  public newUnitText:string = '';

  private headers = new Headers({'Content-Type': 'application/json'});
  private unitUrl = 'http://localhost:5000/v1/units';  // URL to web api

  constructor(private _baConfig:BaThemeConfigProvider, private _unitService:UnitService, private http: Http, private router: Router,) {
    this.unitList = this._unitService.getUnitList();

    this.unitList.forEach((item) => {
      item.color = this._getRandomColor();
    });
  }

  getNotDeleted() {
    return this.unitList.filter((item:any) => {
      return !item.deleted
    })
  }


  addUnitItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newUnitText.trim() != '') {


      return this.http
        .post(this.unitUrl, JSON.stringify({title: this.newUnitText}), {headers: this.headers})
        .toPromise()
        .then((res) => {
                this.unitList.unshift({
                  text: this.newUnitText,
                  color: this._getRandomColor(),
                });
                this.newUnitText = '';
                res.json().data
              }
            )
        .catch(this.handleError);

    }
  }

  getUnits(): void {
    this._unitService
      .getUnits()
      .then(units => {
        this.units = units;
        console.log(units);
      }
      );
  }


  ngOnInit(): void {
    this.getUnits();
  }


  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}


