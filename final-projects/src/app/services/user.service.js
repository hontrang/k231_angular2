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
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/http");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.isLogged = false;
        this.loggedUser = undefined;
        this.eventSubject = new rxjs_1.ReplaySubject(1);
        if (localStorage.getItem("nguoi_dung")) {
            this.setLoggedStatus(true);
        }
    }
    UserService.prototype.checkUserLogged = function () {
        return this.isLogged;
    };
    UserService.prototype.getAPIByHttp = function () {
        return this._http.get("http://172.25.55.10:8000/")
            .toPromise()
            .then(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.createNewUser = function (user) {
        return this._http.post("http://172.25.55.10:8000/", JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserService.prototype.setLoggedStatus = function (status) {
        this.sendCustomEvent();
        this.isLogged = status;
    };
    UserService.prototype.setLoggedUser = function (user) {
        this.loggedUser = user;
        if (user != undefined) {
            this.setLoggedStatus(true);
        }
        else {
            this.setLoggedStatus(false);
        }
    };
    UserService.prototype.getLoggedUser = function () {
        return this.loggedUser;
    };
    Object.defineProperty(UserService.prototype, "$getEventSubject", {
        // set observable of this subject
        get: function () {
            return this.eventSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // remove from observer
    UserService.prototype.resetEventObserver = function () {
        this.eventSubject = new rxjs_1.ReplaySubject(1);
    };
    // send event to observers
    UserService.prototype.sendCustomEvent = function () {
        this.eventSubject.next(true);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map