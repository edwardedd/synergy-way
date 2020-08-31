import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../shop-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  items:any
  array_id:any=[];
  disable: boolean =true;
  amount: any=[];
  product_id:any=[];
  blockSetitem: boolean =true;
  constructor(private shopService: ShopCartService) { }

  ngOnInit(): void {
      this.items = this.shopService.items();
      this.addAmount();
  }

  addToCard(id:number){
    if(JSON.parse(localStorage.getItem("this.array_id"))===null){
      this.array_id.push(id)
      localStorage['this.array_id']=JSON.stringify(this.array_id);
      let getId = JSON.parse(localStorage.getItem("this.array_id"));
    }else{
      let getId = JSON.parse(localStorage.getItem("this.array_id"));
      if(getId.includes(id)){
      }else{
        getId.push(id);
        localStorage['this.array_id']=JSON.stringify(getId);
      }
    }
    this.addAmount();
  }

  changeValue(id:number,e){
    let amount = e.target.value;
    this.amount[id] = amount;
    localStorage.setItem('amount'+id,JSON.stringify(amount));
  }

  getAmount(){
    for (let i = 0; i < this.product_id.length; i++){
      this.amount[this.product_id[i]] = JSON.parse(localStorage.getItem('amount'+this.product_id[i]));
    }
  }

  addAmount(){
    if(localStorage.getItem('this.array_id')===null){
      return
    }else{
      this.product_id = JSON.parse(localStorage["this.array_id"]);
      for (let i = 0; i < this.product_id.length; i++){
        if(JSON.parse(localStorage.getItem("amount"+this.product_id[i]))===null){
          localStorage.setItem('amount'+this.product_id[i],JSON.stringify(1));
          this.amount[this.product_id[i]] = 1;
        }else{
          this.amount[this.product_id[i]] = JSON.parse(localStorage.getItem('amount'+this.product_id[i]));
        }
      }
    }
  }
}
