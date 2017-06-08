import { Component, OnInit } from '@angular/core';
import {NguoiDung} from '../../models/user.component';
@Component({

    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls:['./check-sign-up.css']   
})
export class SignUpComponent implements OnInit {
    nguoi_dung:NguoiDung = new NguoiDung("","","","","","");
    constructor() { }

    ngOnInit() { }

}