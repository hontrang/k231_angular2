import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-engine',
    templateUrl: './search-engine.component.html'
})

export class SearchEngineComponent implements OnInit {
    constructor() { }
    search: string = "";
    ngOnInit() { }
}