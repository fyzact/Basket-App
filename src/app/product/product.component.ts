import { Component, OnInit } from '@angular/core';
import { Product  } from "./product";
import { ProductService } from "./service/product.service";
import { CartService } from "../cart/service/cart.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,
    private cartService:CartService,private activatedRoute:ActivatedRoute) { }
  products:Product[];
  addedProduct:string
  seoUrl:string
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.setProducts(params["seoUrl"]);
    })

  }

  setProducts(seoUrl:string){
     this.productService.getProducts(seoUrl).subscribe(response=>{
this.products=response;
     });
  }

  addToCart(product:Product){
    this.addedProduct=product.productName;
    this.cartService.addToCart(product);
    setTimeout(() => {
      this.addedProduct = undefined
    }, 2000);
  }

}
