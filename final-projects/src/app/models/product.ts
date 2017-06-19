export class Product {
    don_gia: number;
    hinh_san_pham: string;
    ma: number;
    ma_loai: number;
    mo_ta_chi_tiet: string;
    mo_ta_tom_tat: string;
    ngay_tao: string;
    san_pham_moi: number
    so_lan_xem: number
    ten_san_pham: string
    thong_tin_khuyen_mai: string
    trang_thai: number;
    constructor(don_gia: number, hinh_san_pham: string, ma: number, ma_loai: number, mo_ta_chi_tiet: string, mo_ta_tom_tat: string, ngay_tao: string, san_pham_moi: number, so_lan_xem: number, ten_san_pham: string, thong_tin_khuyen_mai: string, trang_thai: number) {
        this.don_gia = don_gia;
        this.hinh_san_pham = hinh_san_pham;
        this.ma = ma;
        this.ma_loai = ma_loai;
        this.mo_ta_chi_tiet = mo_ta_chi_tiet;
        this.mo_ta_tom_tat = mo_ta_tom_tat;
        this.ngay_tao = ngay_tao;
        this.san_pham_moi = san_pham_moi;
        this.so_lan_xem = so_lan_xem;
        this.ten_san_pham = ten_san_pham;
        this.thong_tin_khuyen_mai = thong_tin_khuyen_mai;
        this.trang_thai = trang_thai;
    }
}