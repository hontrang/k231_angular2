import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
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
    login_success = false;
    isForgotPw = false;
    user = new NguoiDung("team02", "team02@gmail.com", "123456", "01/01/2000", "123456789", "12345 abc");
    listUser: NguoiDung[] = [];
    constructor(private _userService: UserService) {
        let chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if (chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null) {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
            this._userService.setLoggedStatus(true);
        }
        this._userService.$getEventSubject.subscribe($event => {
            this.UserLogIn = this._userService.getLoggedUser();
        });
        this._userService.getAPIByHttp().then(data => {
            this.listUser = data;
        });
    }
    setUserLogin(user: any) {
        this.UserLogIn = user;
    }
    setProcessLoginStatus(status: boolean) {
        this.process_login_success = status;
    }
    btn_log_in(email: any, matkhau: any) {
        if (email.value == this.user.email) {
            if (matkhau.value == this.user.matkhau) {
                localStorage.setItem("nguoi_dung", JSON.stringify(this.user));
                // alert("Đăng nhập thành công!");
                this.login_success = true;
                $("#login-modal").modal("hide");
                this._userService.setLoggedStatus(true);
                this.UserLogIn = localStorage.getItem('nguoi_dung');
                // this.reload();
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
        this._userService.setLoggedStatus(false);
        // this.reload();
    }
    forgotPasswd() {
        this.isForgotPw = true;
    }

    Upload(){
        this._userService.createNewUser(this.user).then(data => console.log(data));
    }
    ngOnInit() { }
}