export class ShoppingCart {
    CartID: string;
    UserID: string;
    ProductID: string;
    ProductName: string;
    ProductImage: string;
    ProductPrice: number;
    Quantity: number

    constructor(cartID:string, userID:string, productID:string, productName:string, productImage:string, productPrice:number, quantity:number){
        this.CartID = cartID;
        this.UserID = userID;
        this.ProductID = productID;
        this.ProductName = productName;
        this.ProductImage = productImage;
        this.ProductPrice = productPrice;
        this.Quantity = quantity
    }
}