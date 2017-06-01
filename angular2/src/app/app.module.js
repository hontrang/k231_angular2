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
var wid_footer_top_component_1 = require("./widgets/wid-footer-top/wid_footer_top.component");
var mod_footer_top_1_component_1 = require("./modules/mod-footer-top-1/mod_footer_top_1.component");
var mod_footer_top_2_component_1 = require("./modules/mod-footer-top-2/mod_footer_top_2.component");
var mod_footer_top_3_component_1 = require("./modules/mod-footer-top-3/mod_footer_top_3.component");
var mod_footer_top_4_component_1 = require("./modules/mod-footer-top-4/mod_footer_top_4.component");
var wid_footer_bottom_component_1 = require("./widgets/wid-footer-bottom/wid_footer_bottom.component");
var wid_footer_bottom_1_component_1 = require("./widgets/wid-footer-bottom-1/wid_footer_bottom_1.component");
var wid_footer_bottom_2_component_1 = require("./widgets/wid-footer-bottom-2/wid_footer_bottom_2.component");
var mod_slider_component_1 = require("./modules/mod-slider/mod-slider.component");
var mod_main_content_component_1 = require("./modules/mod-main-content/mod-main-content.component");
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
            wid_product_1_component_1.WidProduct1Component, wid_product_2_component_1.WidProduct2Component, wid_product_3_component_1.WidProduct3Component,
            wid_footer_top_component_1.WidFooterTopComponent, mod_footer_top_1_component_1.ModFooterTop1Component, mod_footer_top_2_component_1.ModFooterTop2Component, mod_footer_top_3_component_1.ModFooterTop3Component, mod_footer_top_4_component_1.ModFooterTop4Component,
            wid_footer_bottom_component_1.WidFooterBottomComponent, wid_footer_bottom_1_component_1.WidFooterBottom1Component, wid_footer_bottom_2_component_1.WidFooterBottom2Component,
            mod_slider_component_1.ModSliderComponent, mod_main_content_component_1.ModMainContentComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map