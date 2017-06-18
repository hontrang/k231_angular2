import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'back-to-top',
    templateUrl: './back-to-top.component.html'
})

export class BackToTopComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    scrollTop(){
        window.scrollTo(0,0);
    }
}