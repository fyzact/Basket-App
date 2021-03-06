import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from "../service/cart.service";
import { CartItem } from "../cart-item";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit,DoCheck {

  totalCartItem:number; 
  totalCartItemPrice:number
  cartItems:CartItem[]; 
  constructor(private cartService:CartService ) { }

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  ngDoCheck (){
    this.totalCartItem = this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    this.totalCartItemPrice= this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.unitPrice,0);
  }

}
