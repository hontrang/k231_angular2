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
var user_component_1 = require("../../models/user.component");
var SignUpComponent = (function () {
    function SignUpComponent() {
        this.nguoi_dung = new user_component_1.NguoiDung("", "", "", "", "", "");
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./check-sign-up.css']
    }),
    __metadata("design:paramtypes", [])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map