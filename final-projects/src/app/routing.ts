import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// import { NameComponent } from './name.component';
import {HomeContentComponent  } from "./module/home-page/home-content.component";
import {SingleShopProductContentComponent } from "./module/single-shop-product-page/single-shop-product-content.component";
import {SingleProductContentComponent} from "./module/single-product-page/single-product-content.component";
import {ContactPageContentComponent} from "./module/contact-page/contact-page-content.component";
import {SingleProductRightComponent} from "./components/single-product-right/single-product-right.component";
import { ShoppingCartContentComponent } from "./module/shopping-cart-page/shopping-cart-page.component";
const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'single-shop-product-content/:key', component: SingleShopProductContentComponent },
  { path: 'single-product-content', component:SingleProductContentComponent},
  { path: 'single-product-content/:id_san_pham',component:SingleProductContentComponent},
  { path: 'contact',component:ContactPageContentComponent},
  { path: 'shopping-cart', component:ShoppingCartContentComponent},
  {path: 'single-shop-product-content/san-pham-moi/single-product-content/:id_san_pham', redirectTo:'single-product-content/:id_san_pham', pathMatch:'full'}
];


export const routedComponents = RouterModule.forRoot(routes);