import { Injectable } from '@angular/core';
import { ListProduct } from '../models/mock_product'
import { UserService } from "../services/user.service";


@Injectable()
export class ProductService {

    constructor(private _userService: UserService) {

    }
    get_list_product() {
        return ListProduct;
    }
    get_list_product_with_price(name: string) {
        console.log(this._userService.checkUserLogged());
        if (this._userService.checkUserLogged()) {
            return Promise.resolve(ListProduct);
        } else {
            return Promise.resolve(ListProduct).then(data => {
                return data.filter(item =>item.desc.indexOf(name) > -1);
            });
        }

    }
}