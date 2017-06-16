import { Component, OnInit } from '@angular/core';
import {NguoiDung} from '../../models/user.component';
import {UserService} from '../../services/user.service'
import { NgForm } from "@angular/forms";
declare var $: any;
@Component({

    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls:['./check-sign-up.css']   
})
export class SignUpComponent implements OnInit {
    isSubmitted = false;
    users_pool :NguoiDung[] = [];
    nguoi_dung:NguoiDung = new NguoiDung("","","","","","");
    UserLogIn: any;
    constructor(private _userService: UserService) { 
        let chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if (chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null) {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
        }
        this._userService.$getEventSubject.subscribe($event=> {
           setTimeout(()=>{
                this.UserLogIn = this._userService.getLoggedUser();
           },50);
        });
    }
    onSubmitRegistration(form: NgForm){
        this.isSubmitted = true;
        this.users_pool.push(this.nguoi_dung);
        setTimeout(()=>{
            $('#close_button').click();
        },5000);
        console.log(this.users_pool);
    }
    ngOnInit() { }

}