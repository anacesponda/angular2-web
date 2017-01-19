import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {Params, ActivatedRoute, Router} from "@angular/router";
import { Location }               from '@angular/common';
import {PageService} from "../unitDetails/page-list/page.service";
import {Page} from "../models/page-model";

@Component({
  selector: 'page-details',
  templateUrl: 'page-details.html',
})
export class PageDetailsComponent {
  page: Page;

  constructor( private pageService: PageService,
               private route: ActivatedRoute,
               private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pageService.getPage2(+params['id']))
      .subscribe(page => {console.log(page); this.page = page});
  }

  // save(): void {
  //   this.pageService.update(this.page)
  //     .then(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}
