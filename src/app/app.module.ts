import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { CartService } from "./cart/service/cart.service";
import { FormsModule } from "@angular/forms";
import { Routes,RouterModule, Route   } from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { FilterPipe } from './product/pipe/filter.pipe';
import { TaxPipe } from './product/pipe/tax.pipe';
import { CategoryComponent } from './category/category.component';

const appRoutes:Routes=[
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/:seoUrl",
    component: ProductComponent
  },
  {
    path: "my-cart",
    component: CartComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    FilterPipe,
    TaxPipe,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{
    provide:"apiUrl",
    useValue:"http://northwindapi.azurewebsites.net/api"
  },CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
