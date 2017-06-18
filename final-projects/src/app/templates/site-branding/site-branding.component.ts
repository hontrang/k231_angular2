import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'site-branding-template',
    templateUrl: './site-branding.component.html'
})

export class SiteBrandingComponent implements OnInit {
    
     mang_gio_hang: any[] = [];
    tong_so_luong: number = 0;
    tong_tien: number = 0;

    constructor() {
        let chuoi_ds_gio_hang = localStorage.getItem("gio_hang");

        if(chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null)
        {
            this.mang_gio_hang = JSON.parse(chuoi_ds_gio_hang);

            this.mang_gio_hang.forEach((san_pham_gio_hang) => {
                this.tong_so_luong += san_pham_gio_hang.so_luong * 1;
                this.tong_tien += san_pham_gio_hang.so_luong * san_pham_gio_hang.new_price;
            });
            
        }

        //console.log(chuoi_ds_gio_hang);    
     }
    ngOnInit() { }
}