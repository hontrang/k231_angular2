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
            wid_mainmenu_component_1.WidMainMenuComponent, mod_mainmenu_component_1.ModMainMenuComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map