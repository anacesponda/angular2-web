import {Injectable} from '@angular/core';
import {UnitModel} from "../unit-model";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UnitService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private unitUrl = 'http://localhost:5000/v1/units';  // URL to web api
  private _unitList = [
    { text: 'Unidad de Prueba' }
  ];

  constructor(private http: Http) { }

  getUnitList() {
    return this._unitList;
  }

  getUnits(): Promise<UnitModel[]> {
    return this.http.get(this.unitUrl)
      .toPromise()
      .then(response => response.json() as UnitModel[])
      .catch((error) => {
        console.log("erroooor", error);
      });

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
