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
var EventSubscribeService = (function () {
    function EventSubscribeService() {
        this.eventSubject = new rxjs_1.ReplaySubject(1);
    }
    Object.defineProperty(EventSubscribeService.prototype, "$getEventSubject", {
        // set observable of this subject
        get: function () {
            return this.eventSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // remove from observer
    EventSubscribeService.prototype.resetEventObserver = function () {
        this.eventSubject = new rxjs_1.ReplaySubject(1);
    };
    // send event to observers
    EventSubscribeService.prototype.sendCustomEvent = function () {
        this.eventSubject.next(true);
    };
    return EventSubscribeService;
}());
EventSubscribeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EventSubscribeService);
exports.EventSubscribeService = EventSubscribeService;
//# sourceMappingURL=refesh-event.service.js.map