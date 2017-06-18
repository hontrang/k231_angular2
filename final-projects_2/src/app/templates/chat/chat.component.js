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
var ChatComponent = (function () {
    function ChatComponent() {
        // mess:String='';
        this.mangChat = [];
    }
    ChatComponent.prototype.ngOnInit = function () { };
    // xuatMess(event:any)
    // {
    //     if(event.keyCode==13){
    //     // this.mess=event.target.value;
    //    // this.mangChat.push(event.target.value);
    //     // event.target.value="";
    //     this.mangChat.push({'people':1,"noidung":"Tui:"+event.target.value});
    //     this.mangChat.push({"people":0,"noidung":"Gái:"+ event.target.value});
    //      event.target.value="";
    //     }
    // }
    ChatComponent.prototype.xuatMess = function (event) {
        // if(event.keyCode==13){
        // this.mess=event.target.value;
        // this.mangChat.push(event.target.value);
        // event.target.value="";
        this.mangChat.push({ 'people': 1, "noidung": "Tui:" + event.target.value });
        this.mangChat.push({ "people": 0, "noidung": "Gái:" + event.target.value });
        event.target.value = "";
        // }
        //Hàm này để chỉnh khi gõ chát thì thanh cuộn scroll sẽ ko ngắn lại
        setTimeout(function () {
            $(".kqchat").scrollTop($(".xuatNd").height());
        }, 50);
    };
    ChatComponent.prototype.sendMess = function (ndtn) {
        this.mangChat.push({ people: 1, noidung: "User:" + ndtn.value });
        this.mangChat.push({ people: 0, noidung: "Girl:" + ndtn.value });
        ndtn.value = "";
    };
    ChatComponent.prototype.thongBaoChat = function (event) {
        //console.log(event);
        if (event.target.value != "") {
            var kq = confirm("Bạn đang chát, bạn có muốn chát tiếp ko?");
            if (kq) {
                this.mangChat.push({ people: 1, noidung: "Tui:" + event.target.value });
                this.mangChat.push({ people: 0, noidung: "Gái:" + event.target.value });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    };
    // openChat(event:any)
    // {
    //     var openChat=$('.kqchat,.noidungchat');
    //     openChat.show();
    // }
    ChatComponent.prototype.MinimizeChat = function (event) {
        var closeChat = $('.kqchat,.noidungchat');
        closeChat.toggle();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chat',
        templateUrl: './chat.component.html'
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map