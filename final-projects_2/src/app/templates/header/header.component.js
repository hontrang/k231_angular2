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
var HeaderComponent = (function () {
    function HeaderComponent() {
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
        this.user = {
            email: "team02@gmail.com",
            matkhau: "123456"
        };
        var chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if (chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null) {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
        }
    }
    HeaderComponent.prototype.btn_log_in = function (email, matkhau) {
        if (email.value == this.user.email) {
            if (matkhau.value == this.user.matkhau) {
                localStorage.setItem("nguoi_dung", JSON.stringify(this.user));
                alert("Đăng nhập thành công!");
                $("#login-modal").modal();
            }
            else {
                alert("Mật khẩu không chính xác");
            }
        }
        else {
            alert("tài khoản không tồn tại!");
        }
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-template',
        templateUrl: './header.component.html'
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map