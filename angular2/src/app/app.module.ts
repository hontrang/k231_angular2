import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {WidHeaderComponent} from './widgets/wid-header/wid_header.component';
import {WidHeaderLeftComponent} from './widgets/wid-header-left/wid_header_left.component';
import {WidHeaderRightComponent} from './widgets/wid-header-right/wid_header_right.component'
import {WidBrandingComponent} from './widgets/wid-branding/wid_branding.component';
import {WidBradingLogoComponent} from './widgets/wid-branding-logo/wid_branding_logo.component';
import {WidBrandingCartComponent} from './widgets/wid-branding-cart/wid_branding_cart.component';
import {WidMainMenuComponent} from './widgets/wid-mainmenu/wid_mainmenu.component';
import {ModMainMenuComponent} from './modules/mod-mainmenu/mod_mainmenu.component';
import {WidPromoComponent} from './widgets/wid-promo/wid_promo.component';
import {WidPromo1Component} from './widgets/wid-promo-1/wid_promo_1.component';
import {WidPromo2Component} from './widgets/wid-promo-2/wid_promo_2.component';
import {WidPromo3Component} from './widgets/wid-promo-3/wid_promo_3.component';
import {WidPromo4Component} from './widgets/wid-promo-4/wid_promo_4.component';
import {WidBrandsComponent} from './widgets/wid-brands/wid_brands.component';
import {WidBrandsContentComponent} from './widgets/wid-brands-content/wid_brands_content.component';
import {WidProductComponent} from './widgets/wid-product/wid_product.component';
import {ModProductContentComponent} from './modules/mod-product-content/mod_product_content.component';
import {WidProduct1Component} from './widgets/wid-product-1/wid_product_1.component';
import {WidProduct2Component} from './widgets/wid-product-2/wid_product_2.component';
import {WidProduct3Component} from './widgets/wid-product-3/wid_product_3.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,WidHeaderComponent,WidHeaderLeftComponent,WidHeaderRightComponent,
                  WidBrandingComponent,WidBradingLogoComponent,WidBrandingCartComponent,
                  WidMainMenuComponent,ModMainMenuComponent,WidPromoComponent,
                  WidPromo1Component,WidPromo2Component,WidPromo3Component,WidPromo4Component,
                  WidBrandsComponent,WidBrandsContentComponent,WidProductComponent,ModProductContentComponent,
                  WidProduct1Component,WidProduct2Component,WidProduct3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
