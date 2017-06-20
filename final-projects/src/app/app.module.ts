import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
//Routing
import { routedComponents } from "./routing";
//Form 
import {FormsModule} from '@angular/forms';
//Templates
import { HeaderComponent } from "./templates/header/header.component";
import { MainmenuComponent } from "./templates/mainmenu/mainmenu.component";
import { SiteBrandingComponent } from "./templates/site-branding/site-branding.component";
import { FooterTopComponent } from "./templates/footer-top/footer-top.component";
import { FooterBottomComponent } from "./templates/footer-bottom/footer-bottom.component";
import { ChatComponent} from "./templates/chat/chat.component";

//Components
import { BrandsComponent } from "./components/brands/brands.component";
import { MaincontentComponent } from "./components/maincontent/maincontent.component";
import { ProductWidgetComponent } from "./components/product-widget/product-widget.component";
import { PromoComponent } from "./components/promo/promo.component";
import { SliderComponent } from "./components/slider/slider.component";
import { ProductBigTitleComponent } from "./components/product-big-title/product-big-title.component";
import { SingleShopProductComponent } from "./components/single-shop-product/single-shop-product.component";
import {SingleProductLeftComponent} from "./components/single-product-left/single-product-left.component";
import {SingleProductRightComponent} from "./components/single-product-right/single-product-right.component";

//Modules
import { HomeContentComponent } from "./module/home-page/home-content.component";
import { SignUpComponent } from "./module/sign-up-page/sign-up.component";
import {LoginPageComponent} from "./module/login-page/login-page.component";
import { SingleShopProductContentComponent } from "./module/single-shop-product-page/single-shop-product-content.component";
import { SingleProductContentComponent } from "./module/single-product-page/single-product-content.component";
import { ShoppingCartContentComponent } from "./module/shopping-cart-page/shopping-cart-page.component";

//Services
import {UserService} from "./services/user.service";
import { ProductService } from "./services/product.service";
import {SingleProductLeftService } from "./services/single-product-left.service";
import {EventSubscribeService} from "./services/refesh-event.service";
import { ShoppingCartService } from "./services/shoppingCart.service";

@NgModule({
  imports:      [ BrowserModule,FormsModule,routedComponents ],
  declarations: [ AppComponent, HeaderComponent, MainmenuComponent, SiteBrandingComponent, FooterTopComponent, FooterBottomComponent,
                  BrandsComponent, MaincontentComponent, ProductWidgetComponent, PromoComponent, SliderComponent,
                  ProductBigTitleComponent, SingleShopProductComponent,LoginPageComponent,
                  HomeContentComponent, SingleShopProductContentComponent,ChatComponent,SignUpComponent,SingleProductLeftComponent,SingleProductRightComponent,
                  SingleProductContentComponent, ShoppingCartContentComponent],
  providers: [ProductService,SingleProductLeftService,UserService,EventSubscribeService, ShoppingCartService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
