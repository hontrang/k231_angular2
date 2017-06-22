export class ShoppingCart {
    CartID: string;
    UserID: string;
    Items: any[];
    ProductPrice: number;
    Quantity: number

    constructor(cartID:string, userID:string, items: any[]){
        this.CartID = cartID;
        this.UserID = userID;
        this.Items = items;
        this.ProductPrice = 0;
        this.Quantity = 0;
    }
}