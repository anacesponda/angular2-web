import { Component, ViewEncapsulation } from '@angular/core';

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./ckeditor.html'),
  styles: [require('./ckeditor.scss')]
})

export class Ckeditor {
  public ckeditorContent:string = '<p><strong>Tu texto va aqu&iacute;:</strong></p> <ul> <li>Prueba 1</li> <li>Prueba 2</li> </ul>';
  public config = {
    uiColor: '#F0F3F4',
    height: '300'
  };

  constructor() {
  }
}
