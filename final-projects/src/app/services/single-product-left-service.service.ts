import { Injectable } from '@angular/core';
import {listsingleproductleft} from "../models/mock-single-product-left";

@Injectable()
export class SingleProductLeftService {
    getListSingleProductLeft(){
        return listsingleproductleft;
    }
    constructor() { }
}