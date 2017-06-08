export class NguoiDung{
   HoTen:string;
   Email:string;
   MatKhau:string;
   NgaySinh:any;
   DienThoai:string;
   DiaChi:string;
   
   constructor(ht:string,email:string,mk:string,ngaysinh:string,dienthoai:string,diachi:string) { 
        this.HoTen=ht;
        this.Email=email;
        this.MatKhau=mk;
        this.NgaySinh=ngaysinh;
        this.DienThoai=dienthoai;
        this.DiaChi=diachi;
   }

}