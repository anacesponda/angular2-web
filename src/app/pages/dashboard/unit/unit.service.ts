import {Injectable} from '@angular/core';
import {Unit} from "../unit-model";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Page} from "../../models/page-model";

@Injectable()
export class UnitService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private unitUrl = 'http://localhost:5000/v1/units';  // URL to web api
  private pageUrl = 'http://localhost:5000/v1/pages';  // URL to web api
  private _unitList = [
    { text: 'Unidad de Prueba' }
  ];

  constructor(private http: Http) { }

  getUnitList() {
    return this._unitList;
  }

  update(unit: Unit): Promise<Unit> {
  const url = this.unitUrl + '/' + unit.id;
  return this.http
    .patch(url, JSON.stringify(unit), {headers: this.headers})
    .toPromise()
    .then(() => unit)
    .catch(this.handleError);
}

  updatePage(page: Page): Promise<Page> {
    const url = this.pageUrl + '/' + page.id;
    return this.http
      .patch(url, JSON.stringify(page), {headers: this.headers})
      .toPromise()
      .then(() => page)
      .catch(this.handleError);
  }

  createPage(page: Page): Promise<Page> {
    const url = this.pageUrl + '/';
    return this.http
      .post(url, JSON.stringify(page), {headers: this.headers})
      .toPromise()
      .then(() => page)
      .catch(this.handleError);
  }


  getUnits(): Promise<Unit[]> {
    return this.http.get(this.unitUrl)
      .toPromise()
      .then(response => response.json() as Unit[])
      .catch((error) => {
        console.log("erroooor", error);
      });

  }

  getUnit(id: number): Promise<Unit> {
    return this.http.get(this.unitUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as Unit)
      .catch((error) => {
        alert('error');
        console.log("Error in unit", error);
      });

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
