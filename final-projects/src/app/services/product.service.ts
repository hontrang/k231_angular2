import { Injectable } from '@angular/core';
import { ListProduct } from '../models/mock_product'
import { Product } from '../models/product'
import { UserService } from "../services/user.service";
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from "@angular/http";




@Injectable()
export class ProductService {

    constructor(private _userService: UserService, private _http: Http) {

    }
    get_list_product() {
        return ListProduct;
    }
    get_list_product_with_price(name: string) {
        return Promise.resolve(ListProduct);
    }
    get_product_by_id(id: number){
        return Promise.resolve(ListProduct).then(data=> data.filter(item => item.id == id));
    }
    get_product_by_desc(name: string){
        return Promise.resolve(ListProduct).then(data=> data.filter(item => item.desc.indexOf(name) != -1));
    }
    getListProductFromPublicAPI(): Observable <Product[]>{
        return this._http.get("http://dev-er.com/service_api_ban_hang_dien_tu/api_service_san_pham.php").map(response => response.json() as Product[]);
    }

}