export class Product{
    id: number;
    desc: string;
    new_price: string;
    old_price: string;
    image:string;
    constructor(id: number, desc: string, new_price: string, old_price: string, image: string){
        this.id= id;
        this.desc = desc;
        this.new_price = new_price;
        this.old_price = old_price;
        this.image = image;
    }
}