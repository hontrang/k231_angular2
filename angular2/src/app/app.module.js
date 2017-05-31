"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var wid_header_component_1 = require("./widgets/wid-header/wid_header.component");
var wid_header_left_component_1 = require("./widgets/wid-header-left/wid_header_left.component");
var wid_header_right_component_1 = require("./widgets/wid-header-right/wid_header_right.component");
var wid_branding_component_1 = require("./widgets/wid-branding/wid_branding.component");
var wid_branding_logo_component_1 = require("./widgets/wid-branding-logo/wid_branding_logo.component");
var wid_branding_cart_component_1 = require("./widgets/wid-branding-cart/wid_branding_cart.component");
var wid_mainmenu_component_1 = require("./widgets/wid-mainmenu/wid_mainmenu.component");
var mod_mainmenu_component_1 = require("./modules/mod-mainmenu/mod_mainmenu.component");
var wid_promo_component_1 = require("./widgets/wid-promo/wid_promo.component");
var wid_promo_1_component_1 = require("./widgets/wid-promo-1/wid_promo_1.component");
var wid_promo_2_component_1 = require("./widgets/wid-promo-2/wid_promo_2.component");
var wid_promo_3_component_1 = require("./widgets/wid-promo-3/wid_promo_3.component");
var wid_promo_4_component_1 = require("./widgets/wid-promo-4/wid_promo_4.component");
var wid_brands_component_1 = require("./widgets/wid-brands/wid_brands.component");
var wid_brands_content_component_1 = require("./widgets/wid-brands-content/wid_brands_content.component");
var wid_product_component_1 = require("./widgets/wid-product/wid_product.component");
var mod_product_content_component_1 = require("./modules/mod-product-content/mod_product_content.component");
var wid_product_1_component_1 = require("./widgets/wid-product-1/wid_product_1.component");
var wid_product_2_component_1 = require("./widgets/wid-product-2/wid_product_2.component");
var wid_product_3_component_1 = require("./widgets/wid-product-3/wid_product_3.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, wid_header_component_1.WidHeaderComponent, wid_header_left_component_1.WidHeaderLeftComponent, wid_header_right_component_1.WidHeaderRightComponent,
            wid_branding_component_1.WidBrandingComponent, wid_branding_logo_component_1.WidBradingLogoComponent, wid_branding_cart_component_1.WidBrandingCartComponent,
            wid_mainmenu_component_1.WidMainMenuComponent, mod_mainmenu_component_1.ModMainMenuComponent, wid_promo_component_1.WidPromoComponent,
            wid_promo_1_component_1.WidPromo1Component, wid_promo_2_component_1.WidPromo2Component, wid_promo_3_component_1.WidPromo3Component, wid_promo_4_component_1.WidPromo4Component,
            wid_brands_component_1.WidBrandsComponent, wid_brands_content_component_1.WidBrandsContentComponent, wid_product_component_1.WidProductComponent, mod_product_content_component_1.ModProductContentComponent,
            wid_product_1_component_1.WidProduct1Component, wid_product_2_component_1.WidProduct2Component, wid_product_3_component_1.WidProduct3Component],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map