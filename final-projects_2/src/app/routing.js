"use strict";
var router_1 = require("@angular/router");
// import { NameComponent } from './name.component';
var home_content_component_1 = require("./module/home-page/home-content.component");
var single_shop_product_content_component_1 = require("./module/single-shop-product-page/single-shop-product-content.component");
var single_product_content_component_1 = require("./module/single-product-page/single-product-content.component");
var single_product_right_component_1 = require("./components/single-product-right/single-product-right.component");
var routes = [
    { path: '', component: home_content_component_1.HomeContentComponent },
    { path: 'single-shop-product-content', component: single_shop_product_content_component_1.SingleShopProductContentComponent },
    { path: 'single-product-content', component: single_product_content_component_1.SingleProductContentComponent },
    { path: 'single-product-right/:id_san_pham', component: single_product_right_component_1.SingleProductRightComponent }
];
exports.routedComponents = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routing.js.map