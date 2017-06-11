import { Injectable } from '@angular/core';
import { EventSubscribeService } from "../services/refesh-event.service";
import { NguoiDung } from "../models/user.component"
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {

    isLogged: boolean = false;

    loggedUser: NguoiDung = undefined;
    private eventSubject: Subject<any> = new ReplaySubject(1);

    constructor(private serviceInstance: EventSubscribeService) {
        if (localStorage.getItem("nguoi_dung")) {
            this.setLoggedStatus(true);
        }
    }
    checkUserLogged() {
        return this.isLogged;
    }

    setLoggedStatus(status: boolean) {
        this.serviceInstance.sendCustomEvent();
        this.isLogged = status;
    }
    setLoggedUser(user: NguoiDung) {
        this.sendCustomEvent();
        this.loggedUser = user;
        if(user!= undefined){
            this.isLogged = true;
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