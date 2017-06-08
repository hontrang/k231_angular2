import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
    // mess:String='';
    mangChat:any[]=[];
    constructor() { }

    ngOnInit() { }
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
     xuatMess(event:any)
    {
        // if(event.keyCode==13){
        // this.mess=event.target.value;
       // this.mangChat.push(event.target.value);
        // event.target.value="";
        this.mangChat.push({'people':1,"noidung":"Tui:"+event.target.value});
        this.mangChat.push({"people":0,"noidung":"Gái:"+ event.target.value});
         event.target.value="";
        // }
        //Hàm này để chỉnh khi gõ chát thì thanh cuộn scroll sẽ ko ngắn lại
        setTimeout(() => {
            $(".kqchat").scrollTop($(".xuatNd").height());
        }, 50);

    }
    sendMess(ndtn:any){
        this.mangChat.push({people:1,noidung:"User:"+ndtn.value});
        this.mangChat.push({people:0,noidung:"Girl:"+ ndtn.value});
        ndtn.value="";
    }
    thongBaoChat(event:any){
            //console.log(event);
        if(event.target.value != "")
        {
            let kq = confirm("Bạn đang chát, bạn có muốn chát tiếp ko?");
            if(kq)
            {
                this.mangChat.push({people: 1, noidung: "Tui:" +event.target.value});
                this.mangChat.push({people: 0, noidung: "Gái:" + event.target.value});
                event.target.value = "";
            }
            else
            {
                event.target.value = "";
            }
        }

    }
    // openChat(event:any)
    // {
    //     var openChat=$('.kqchat,.noidungchat');
    //     openChat.show();
   
    // }
    MinimizeChat(event:any)
    {
        var closeChat=$('.kqchat,.noidungchat');
        closeChat.toggle();
    }
}