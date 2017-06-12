import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { NguoiDung } from "../../models/user.component";
declare var $: any;

@Component({
    selector: 'log-in',
    templateUrl: './login-page.component.html'
})

export class LoginPageComponent implements OnInit {
    listSetting: any[] = [
        {
            "name": "currency",
            "default": "USD",
            "child": [
                "USD",
                "INR",
                "GBP"
            ]
        },
        {
            "name": "language",
            "default": "English",
            "child": [
                "English",
                "French",
                "German"
            ]
        }
    ];
    UserLogIn: any;
    process_login_success = false;
    isForgotPw = false;
    user = new NguoiDung("team02", "team02@gmail.com", "123456", "01/01/2000", "123456789", "12345 abc");

    constructor(private _userService: UserService) {
        let chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if (chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null) {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
            this._userService.setLoggedUser(this.UserLogIn);
        }
        else {
            this._userService.setLoggedUser(undefined);
        }
        this._userService.$getEventSubject.subscribe($event => {
            this.UserLogIn = this._userService.getLoggedUser();
        });
    }
    setUserLogin(user: any) {
        this.UserLogIn = user;
    }
    setProcessLoginStatus(status: boolean) {
        this.process_login_success = status;
    }
    btn_log_in(email: any, matkhau: any) {
        if (email.value == this.user.Email) {
            if (matkhau.value == this.user.MatKhau) {
                // this.setUserLogin(this.user);
                localStorage.setItem("nguoi_dung", JSON.stringify(this.user));
                this.setProcessLoginStatus(true);
                this._userService.setLoggedUser(this.user);
                setTimeout(() => {
                    $("#login-modal").modal("hide");
                }, 1000);
            }
            else {
                alert("Mật khẩu không chính xác");
            }
        }
        else {
            alert("tài khoản không tồn tại!");
        }
    }
    reload() {
        window.location.reload();
    }
    logout() {
        localStorage.removeItem("nguoi_dung");
        this._userService.setLoggedUser(undefined);
        this.setProcessLoginStatus(false);
    }
    forgotPasswd() {
        this.isForgotPw = true;
    }
    ngOnInit() { }
}