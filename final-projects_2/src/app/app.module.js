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
//Routing
var routing_1 = require("./routing");
//Form 
var forms_1 = require("@angular/forms");
//Templates
var header_component_1 = require("./templates/header/header.component");
var mainmenu_component_1 = require("./templates/mainmenu/mainmenu.component");
var site_branding_component_1 = require("./templates/site-branding/site-branding.component");
var footer_top_component_1 = require("./templates/footer-top/footer-top.component");
var footer_bottom_component_1 = require("./templates/footer-bottom/footer-bottom.component");
var chat_component_1 = require("./templates/chat/chat.component");
//Components
var brands_component_1 = require("./components/brands/brands.component");
var maincontent_component_1 = require("./components/maincontent/maincontent.component");
var product_widget_component_1 = require("./components/product-widget/product-widget.component");
var promo_component_1 = require("./components/promo/promo.component");
var slider_component_1 = require("./components/slider/slider.component");
var product_big_title_component_1 = require("./components/product-big-title/product-big-title.component");
var single_shop_product_component_1 = require("./components/single-shop-product/single-shop-product.component");
var single_product_left_component_1 = require("./components/single-product-left/single-product-left.component");
var single_product_right_component_1 = require("./components/single-product-right/single-product-right.component");
//Modules
var home_content_component_1 = require("./module/home-page/home-content.component");
var sign_up_component_1 = require("./module/sign-up-page/sign-up.component");
var login_page_component_1 = require("./module/login-page/login-page.component");
var single_shop_product_content_component_1 = require("./module/single-shop-product-page/single-shop-product-content.component");
var single_product_content_component_1 = require("./module/single-product-page/single-product-content.component");
//Service
var user_service_1 = require("./services/user.service");
var product_service_1 = require("./services/product.service");
var single_product_left_service_1 = require("./services/single-product-left.service");
var refesh_event_service_1 = require("./services/refesh-event.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routing_1.routedComponents],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, mainmenu_component_1.MainmenuComponent, site_branding_component_1.SiteBrandingComponent, footer_top_component_1.FooterTopComponent, footer_bottom_component_1.FooterBottomComponent,
            brands_component_1.BrandsComponent, maincontent_component_1.MaincontentComponent, product_widget_component_1.ProductWidgetComponent, promo_component_1.PromoComponent, slider_component_1.SliderComponent,
            product_big_title_component_1.ProductBigTitleComponent, single_shop_product_component_1.SingleShopProductComponent, login_page_component_1.LoginPageComponent,
            home_content_component_1.HomeContentComponent, single_shop_product_content_component_1.SingleShopProductContentComponent, chat_component_1.ChatComponent, sign_up_component_1.SignUpComponent, single_product_left_component_1.SingleProductLeftComponent, single_product_right_component_1.SingleProductRightComponent,
            single_product_content_component_1.SingleProductContentComponent,],
        providers: [product_service_1.ProductService, single_product_left_service_1.SingleProductLeftService, user_service_1.UserService, refesh_event_service_1.EventSubscribeService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map