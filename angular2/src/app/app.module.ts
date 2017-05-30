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

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,WidHeaderComponent,WidHeaderLeftComponent,WidHeaderRightComponent,
                  WidBrandingComponent,WidBradingLogoComponent,WidBrandingCartComponent,
                  WidMainMenuComponent,ModMainMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
