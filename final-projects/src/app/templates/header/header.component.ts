import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-template',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    listSetting:any[] = [
                      {
                        "name": "currency",
                        "default": "USD",
                        "child": [
                          "USD",
                          "INR",
                          "GBP"
                        ]
                      },
                      {
                        "name": "language",
                        "default": "English",
                        "child": [
                          "English",
                          "French",
                          "German"
                        ]
                      }
                    ];

}