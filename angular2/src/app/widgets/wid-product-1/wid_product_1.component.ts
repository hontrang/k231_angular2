import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'wid-product-1',
    templateUrl: './wid_product_1.component.html'
})

export class WidProduct1Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Output() onAddWhitelist = new EventEmitter<string>();
    addToCartList(){
        this.onAddWhitelist.emit();
    }
}