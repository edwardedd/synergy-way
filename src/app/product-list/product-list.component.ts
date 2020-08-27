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
  disable: boolean =false;

  constructor(private shopService: ShopCartService) { }

  ngOnInit(): void {
    this.items = this.shopService.items()
    console.log(this.items);
  }

  // get items() {
  //   return this.shopService.items()
  // }

  addToCard(id){
    if(this.array_id.includes(id)){
      return
    }else{
      this.array_id.push(id)
      localStorage['this.array_id']=JSON.stringify(this.array_id);
      console.log(this.array_id);
    }
    // this.disable = true
  }

  removeFromCart(){
    console.log('reomve');
  }

  changeValue(e){
    console.log(e.target.value);
    
  }

}
