import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ShopCartService } from '../shop-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,DoCheck {
  product_id:any=[];
  cart_state:any=[];
  items:any;
  price=[]
  constructor(private shopService: ShopCartService) { }

  ngOnInit(): void {
    this.product_id = JSON.parse(localStorage["this.array_id"]);
    this.cart_state = this.product_id;
    this.items = this.shopService.items();
    console.log('item',this.items);
    for (let i = 0; i < this.items.length; i++) {
      this.price.push(this.items[i].price)
    }
  }

  ngDoCheck(){
    localStorage.setItem('state', this.cart_state)
  }

  changeValue(e,product){
    console.log(product.id, 'id');
    for(let i=0; i<this.items.length; i++){
      if(this.items[i].id == product.id){
        let current_price = this.items[i].price * e.target.value
        this.price[product.id] = current_price
      }
    }
  }

}
