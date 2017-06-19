import { Injectable } from '@angular/core';
import { Product } from '../models/product'
import { UserService } from "../services/user.service";
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from "@angular/http";




@Injectable()
export class ProductService {

    constructor(private _userService: UserService, private _http: Http) {

    }

    getListProductFromPublicAPI(): Observable <Product[]>{
        return this._http.get("http://dev-er.com/service_api_ban_hang_dien_tu/api_service_san_pham.php").map(response => response.json() as Product[]);
    }

}