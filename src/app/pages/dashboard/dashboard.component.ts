import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor(    private router: Router) {
  }

  gotoDetail(): void {
    let link = ['../pages/units/1'];
    this.router.navigate(link).then(()=>{console.log('ENTRA A THEN')})
      .catch((error) => {
        console.log("erroooor", error);
      });;
  }

}
