import { Injectable } from '@angular/core';
import {ListProduct} from '../models/mock_product'

@Injectable()
export class ProductService {

    constructor() { }
    get_list_product(){
        return ListProduct;
    }
    get_list_product_with_price(max_price: number){
        return Promise.resolve(ListProduct).then(data => {
            return data.filter(item => {
                return parseFloat(item.new_price) > max_price
            });
        });
    }
}