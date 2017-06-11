import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NameComponent } from './name.component';
import {HomeContentComponent  } from "./module/home-page/home-content.component";
import {SingleShopProductContentComponent } from "./module/single-shop-product-page/single-shop-product-content.component";

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'single-shop-product-content', component: SingleShopProductContentComponent },
];


export const routedComponents = RouterModule.forRoot(routes);