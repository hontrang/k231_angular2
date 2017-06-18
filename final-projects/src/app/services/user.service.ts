import { Injectable } from '@angular/core';
import {EventSubscribeService } from "../services/refesh-event.service";

@Injectable()
export class UserService {
    isLogged: boolean = false; 
    constructor(private serviceInstance: EventSubscribeService) { 
        if(localStorage.getItem("nguoi_dung")){
            this.setLoggedStatus(true);
        }
    }
    checkUserLogged(){
        return this.isLogged;
    }

    setLoggedStatus(status: boolean){
        this.serviceInstance.sendCustomEvent();
        console.log(status);
        this.isLogged = status;
    }
}