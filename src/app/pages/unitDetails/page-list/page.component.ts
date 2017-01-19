import {Component, ViewEncapsulation, OnInit, Input} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Page} from "../../models/page-model";
import {PageService} from "./page.service";
import {Unit} from "../../dashboard/unit-model";

@Component({
  selector: 'page-list',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./page.scss')],
  template: require('./page.html')
})
export class PageComponent implements OnInit{
  pages: Page[];
  @Input() unit: Unit;


  public dashboardColors = this._baConfig.get().colors.dashboard;

  public pageList:Array<any>;
  public newPageText:string = '';

  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'http://localhost:5000/v1/pages';  // URL to web api

  constructor(private _baConfig:BaThemeConfigProvider, private _pageService:PageService, private http: Http, private router: Router,) {
    console.log('UNIT', this.unit);
    this.pageList = this.pages;

    // this.pageList.forEach((item) => {
    //   item.color = this._getRandomColor();
    // });
  }


  addPageItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newPageText.trim() != '') {


      return this.http
        .post(this.pageUrl, JSON.stringify({title: this.newPageText}), {headers: this.headers})
        .toPromise()
        .then((res) => {
                this.pageList.unshift({
                  text: this.newPageText,
                  color: this._getRandomColor(),
                });
                this.newPageText = '';
                res.json().data
              }
            )
        .catch(this.handleError);

    }
  }

  getPages(): void {
    this._pageService
      .getPages(this.unit.id)
      .then(unit => {
          this.pages = unit.Pages
      }
      );
  }


  ngOnInit(): void {

    this.getPages();

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

  gotoDetail(id: number): void {
    let link = ['../pages/id/', id];
    this.router.navigate(link);
  }

}


