import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//Templates
import { HeaderComponent } from "./templates/header/header.component";
import { MainmenuComponent } from "./templates/mainmenu/mainmenu.component";
import { SiteBrandingComponent } from "./templates/site-branding/site-branding.component";
import { FooterTopComponent } from "./templates/footer-top/footer-top.component";
import { FooterBottomComponent } from "./templates/footer-bottom/footer-bottom.component";

//Components
import { BrandsComponent } from "./components/brands/brands.component";
import { MaincontentComponent } from "./components/maincontent/maincontent.component";
import { ProductWidgetComponent } from "./components/product-widget/product-widget.component";
import { PromoComponent } from "./components/promo/promo.component";
import { SliderComponent } from "./components/slider/slider.component";
import { ProductBigTitleComponent } from "./components/product-big-title/product-big-title.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";

//Modules
import { HomeContentComponent } from "./module/home-page/home-content.component";
import { SingleProductContentComponent } from "./module/single-product-page/single-product-content.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, MainmenuComponent, SiteBrandingComponent, FooterTopComponent, FooterBottomComponent,
                  BrandsComponent, MaincontentComponent, ProductWidgetComponent, PromoComponent, SliderComponent,
                  ProductBigTitleComponent, SingleProductComponent,
                  HomeContentComponent, SingleProductContentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
