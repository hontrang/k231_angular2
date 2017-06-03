import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mainmenu-template',
    templateUrl: './mainmenu.component.html'
})

export class MainmenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    locationPath:string  = window.location.pathname;
}