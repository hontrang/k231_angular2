"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service");
var user_component_1 = require("../../models/user.component");
var LoginPageComponent = (function () {
    function LoginPageComponent(_userService) {
        var _this = this;
        this._userService = _userService;
        this.listSetting = [
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
        this.login_success = false;
        this.isForgotPw = false;
        this.user = new user_component_1.NguoiDung("team02", "team02@gmail.com", "123456", "01/01/2000", "123456789", "12345 abc");
        this.listUser = [];
        var chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if (chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null) {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
            this._userService.setLoggedStatus(true);
        }
        this._userService.$getEventSubject.subscribe(function ($event) {
            _this.UserLogIn = _this._userService.getLoggedUser();
        });
        // this._userService.getAPIByHttp().then(data => {
        //     this.listUser = data;
        // });
    }
    LoginPageComponent.prototype.setUserLogin = function (user) {
        this.UserLogIn = user;
    };
    LoginPageComponent.prototype.btn_log_in = function (email, matkhau) {
        if (email.value == this.user.Email) {
            if (matkhau.value == this.user.MatKhau) {
                localStorage.setItem("nguoi_dung", JSON.stringify(this.user));
                // alert("Đăng nhập thành công!");
                this.login_success = true;
                $("#login-modal").modal("hide");
                this._userService.setLoggedStatus(true);
                this.UserLogIn = localStorage.getItem('nguoi_dung');
            }
            else {
                alert("Mật khẩu không chính xác");
            }
        }
        else {
            alert("tài khoản không tồn tại!");
        }
    };
    LoginPageComponent.prototype.reload = function () {
        window.location.reload();
    };
    LoginPageComponent.prototype.logout = function () {
        localStorage.removeItem("nguoi_dung");
        this._userService.setLoggedStatus(false);
        // this.reload();
    };
    LoginPageComponent.prototype.forgotPasswd = function () {
        this.isForgotPw = true;
    };
    LoginPageComponent.prototype.Upload = function () {
        // this._userService.createNewUser(this.user).then(data => console.log(data));
    };
    LoginPageComponent.prototype.ngOnInit = function () { };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    core_1.Component({
        selector: 'log-in',
        templateUrl: './login-page.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginPageComponent);
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map