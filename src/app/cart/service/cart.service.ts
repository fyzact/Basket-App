import { Injectable } from '@angular/core';
import { Product } from '../../product/product'
import { CartItem } from '../cart-item'
import { CART_ITEM_LIST } from '../cart-item-list'

@Injectable({
  providedIn: 'root'
})


export class CartService {
cartItems:CartItem[]
  constructor() { }

  addToCart(product:Product):void{
    var addedItem=CART_ITEM_LIST.find(t => t.product.productId == product.productId);
    if(addedItem){
      addedItem.quantity++;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  removeFromCart(product:Product):void{
    var addedItem=CART_ITEM_LIST.find(t => t.product.productId == product.productId);
    var indexNo = CART_ITEM_LIST.indexOf(addedItem);
    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }


}
