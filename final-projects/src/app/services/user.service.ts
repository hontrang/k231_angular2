import { Injectable } from '@angular/core';
import { NguoiDung } from "../models/user.component"
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from "@angular/http";

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    isLogged: boolean = false;

    loggedUser: NguoiDung = undefined;
    private eventSubject: Subject<any> = new ReplaySubject(1);

    constructor(private _http: Http) {
        if (localStorage.getItem("nguoi_dung")) {
            this.setLoggedStatus(true);
        }
    }
    checkUserLogged(){
        return this.isLogged;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    setLoggedStatus(status: boolean) {
        this.sendCustomEvent();
        this.isLogged = status;
    }
    setLoggedUser(user: NguoiDung) {
        this.loggedUser = user;
        if (user != undefined) {
            this.setLoggedStatus(true);
        } else {
            this.setLoggedStatus(false);
        }
    }
    getLoggedUser() {
        return this.loggedUser;
    }

    // set observable of this subject
    get $getEventSubject(): Observable<any> {
        return this.eventSubject.asObservable();
    }
    // remove from observer
    resetEventObserver(): void {
        this.eventSubject = new ReplaySubject(1);
    }
    // send event to observers
    sendCustomEvent(): void {
        this.eventSubject.next(true);
    }
}