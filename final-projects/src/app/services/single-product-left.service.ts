import { Injectable } from '@angular/core';
import { ListSingleProductLeft } from '../models/mock_single_product_left'
//import { UserService } from "../services/user.service";


@Injectable()
export class SingleProductLeftService {

    constructor() {

    }
    get_list_single_product_left() {
        return ListSingleProductLeft;
    }
   
}