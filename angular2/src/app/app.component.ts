import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  name = 'Angular';
  constructor() {

  }
  ngOnInit() {
  }
}
