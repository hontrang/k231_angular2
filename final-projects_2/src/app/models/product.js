"use strict";
var Product = (function () {
    function Product(id, desc, new_price, old_price, image) {
        this.id = id;
        this.desc = desc;
        this.new_price = new_price;
        this.old_price = old_price;
        this.image = image;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map