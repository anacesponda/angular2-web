import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Page} from "../../models/page-model";
import {Unit} from "../../dashboard/unit-model";

@Injectable()
export class PageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private unitUrl = 'https://edu-api-node.herokuapp.com/v1/units';  // URL to web api
  private pageUrl = 'https://edu-api-node.herokuapp.com/v1/pages';  // URL to web api
  private _pageList = [
    { text: 'Pagina de Prueba' }
  ];

  constructor(private http: Http) { }

  getPageList() {
    return this._pageList;
  }

//   update(unit: Unit): Promise<Unit> {
//   const url = this.unitUrl + '/' + unit.id;
//   return this.http
//     .patch(url, JSON.stringify(unit), {headers: this.headers})
//     .toPromise()
//     .then(() => unit)
//     .catch(this.handleError);
// }
//
//   updatePage(page: Page): Promise<Page> {
//     const url = this.pageUrl + '/' + page.id;
//     return this.http
//       .patch(url, JSON.stringify(page), {headers: this.headers})
//       .toPromise()
//       .then(() => page)
//       .catch(this.handleError);
//   }

  getPages(id:number): Promise<any> {
    return this.http.get(this.unitUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as Unit)
      .catch((error) => {
        console.log("erroooor", error);
      });

  }

  getPage2(id: number): Promise<Page> {
    return this.http.get(this.pageUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as Page)
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
