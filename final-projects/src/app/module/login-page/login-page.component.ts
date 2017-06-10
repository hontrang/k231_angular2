import { Component, OnInit } from '@angular/core';
declare var $ : any;

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
    login_success =  false;
    isForgotPw = false;
    user: any = {
        email: "team02@gmail.com",
        matkhau: "123456"
    }

    constructor() {
        let chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if (chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null) {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
        }
    }
    btn_log_in(email: any, matkhau: any) {
        if (email.value == this.user.email) {
            if (matkhau.value == this.user.matkhau) {
                localStorage.setItem("nguoi_dung", JSON.stringify(this.user));
                // alert("Đăng nhập thành công!");
                this.login_success = true;
                $("#login-modal").modal("hide");
                setTimeout(() => this.reload(),2000);
            }
            else {
                alert("Mật khẩu không chính xác");
            }
        }
        else {
            alert("tài khoản không tồn tại!");
        }
    }
    reload(){
        window.location.reload();
    }
    logout(){
        localStorage.removeItem("nguoi_dung");
        this.reload();
    }
    forgotPasswd(){
        this.isForgotPw = true;
    }
    ngOnInit() { }
}