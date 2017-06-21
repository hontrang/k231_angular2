import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//Form 
import { FormsModule } from '@angular/forms';

//HTTP
import { HttpModule } from "@angular/http";


//Router
import { routedComponents } from './routing'

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
import { SearchEngineComponent } from "./components/search-engine/search-engine.component";
import {  BackToTopComponent} from "./components/back-to-top/back-to-top.component";

//Modules
import { HomeContentComponent } from "./module/home-page/home-content.component";
import { SignUpComponent } from "./module/sign-up-page/sign-up.component";
import { LoginPageComponent } from "./module/login-page/login-page.component";
import { SingleShopProductContentComponent } from "./module/single-shop-product-page/single-shop-product-content.component";
import { SingleProductContentComponent } from "./module/single-product-page/single-product-content.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";

import {ContactPageContentComponent} from "./module/contact-page/contact-page-content.component";
//Service
import {UserService} from "./services/user.service";
import { ProductService } from "./services/product.service";
import {SingleProductLeftService } from "./services/single-product-left.service";
import {CartService} from "./services/cart.service"


@NgModule({
  imports: [BrowserModule, FormsModule, routedComponents,HttpModule],
  declarations: [AppComponent, HeaderComponent, MainmenuComponent, SiteBrandingComponent, FooterTopComponent, FooterBottomComponent,
    BrandsComponent, MaincontentComponent, ProductWidgetComponent, PromoComponent, SliderComponent,
    ProductBigTitleComponent, SingleShopProductComponent,
    HomeContentComponent, SingleShopProductContentComponent, ChatComponent, SignUpComponent, SingleProductLeftComponent,SingleProductRightComponent,
    SingleProductContentComponent, ContactPageContentComponent,ContactPageComponent,
    LoginPageComponent,SearchEngineComponent,BackToTopComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, SingleProductLeftService,UserService, CartService]
})
export class AppModule { }
