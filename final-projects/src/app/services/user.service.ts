import { Injectable } from '@angular/core';
import { NguoiDung } from "../models/user.component"
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {

    isLogged: boolean = false;

    loggedUser: NguoiDung = undefined;
    private eventSubject: Subject<any> = new ReplaySubject(1);

    constructor() {
        if (localStorage.getItem("nguoi_dung")) {
            this.setLoggedStatus(true);
        }
    }
    checkUserLogged() {
        return this.isLogged;
    }

    setLoggedStatus(status: boolean) {
        this.sendCustomEvent();
        this.isLogged = status;
    }
    setLoggedUser(user: NguoiDung) {
        this.loggedUser = user;
        if(user != undefined){
            this.setLoggedStatus(true);
        }else{
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