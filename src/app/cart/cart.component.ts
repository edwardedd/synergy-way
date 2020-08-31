import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ShopCartService } from '../shop-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  product_id:any=[];
  cart_state:any=[];
  items:any;
  price:any=[];
  state_array:any = [];
  total_price:number = 0;
  amount:any =[1];
  constructor(private shopService: ShopCartService) { }

  ngOnInit(): void {
    this.product_id = JSON.parse(localStorage["this.array_id"]);
    this.cart_state = this.product_id;
    this.items = this.shopService.items();
    let state = JSON.parse(localStorage.getItem('this.array_id'));

    this.state_array = [...state];
    this.getAmount();
    this.matPrice();
    this.totalPrice()
  }


  changeValue(e,product){
    for(let i=0; i<this.items.length; i++){
      if(this.items[i].id == product.id){
        if(JSON.parse(localStorage.getItem('amount'+product.id))===null){
          localStorage.setItem('amount'+product.id,JSON.stringify(e.target.value));
          this.getAmount();
        }else{
          localStorage.setItem('amount'+product.id,JSON.stringify(e.target.value));
          this.getAmount();
        }
      }
    }
    this.matPrice();
    this.totalPrice();
  }

  getAmount(){
    for (let i = 0; i < this.product_id.length; i++){
      this.amount[this.product_id[i]] = JSON.parse(localStorage.getItem('amount'+this.product_id[i]))
    }
  }

  matPrice(){
    for(let i=0; i<this.state_array.length; i++){
      let amount = JSON.parse(localStorage.getItem('amount'+this.state_array[i]));
      this.price[this.state_array[i]] = +amount * this.items[this.state_array[i]-1].price;
      this.total_price += this.price[this.state_array[i]];
    }

  }

  totalPrice(){
    let total:number = 0;
    if(this.state_array.length===0){
      this.total_price=0;
    }
    for(let i=0; i<this.state_array.length; i++){
      total +=  this.price[this.state_array[i]];
      this.total_price = total
    }
  }

  removeFromCart(id:number){
    for(let i=0; i<this.state_array.length; i++){
      if(id===this.state_array[i]){
      this.state_array.splice(i, 1)
        localStorage['this.array_id']=JSON.stringify(this.state_array);
        localStorage.removeItem('amount'+id);
      }
    }
    this.cart_state = this.state_array;
    this.totalPrice();
  }
}
