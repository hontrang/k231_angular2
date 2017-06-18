import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// import { NameComponent } from './name.component';
import {HomeContentComponent  } from "./module/home-page/home-content.component";
import {SingleShopProductContentComponent } from "./module/single-shop-product-page/single-shop-product-content.component";
import {SingleProductContentComponent} from "./module/single-product-page/single-product-content.component";
import {SingleProductRightComponent} from "./components/single-product-right/single-product-right.component";


const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'single-shop-product-content', component: SingleShopProductContentComponent },
  { path: 'single-product-content', component:SingleProductContentComponent},
  { path: 'single-product-right/:id_san_pham',component:SingleProductRightComponent}
];


export const routedComponents = RouterModule.forRoot(routes);