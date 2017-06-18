import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
    selector: 'header-template',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    listSetting:any[] = [
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
   UserLogIn:any;
       user:any = {
        email: "team02@gmail.com",
        matkhau: "123456"
    }

    constructor() { 
        let chuoi_nguoi_dung = localStorage.getItem("nguoi_dung");
        if(chuoi_nguoi_dung != "" && chuoi_nguoi_dung != null)
        {
            this.UserLogIn = JSON.parse(chuoi_nguoi_dung);
        }
    }
    btn_log_in(email: any, matkhau: any){
        if(email.value == this.user.email)
        {
            if(matkhau.value == this.user.matkhau)
            {
                localStorage.setItem("nguoi_dung", JSON.stringify(this.user));
                alert("Đăng nhập thành công!");
                $("#login-modal").modal();
            }
            else
            {
                alert("Mật khẩu không chính xác");
            }
        }
        else
        {
            alert("tài khoản không tồn tại!");
        }
    }
    ngOnInit() { }
    
    

}