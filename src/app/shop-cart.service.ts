import { Injectable } from '@angular/core';
import { DATA_ITEMS } from './data';




export interface CartItem {
  id: number;
  price: number;
  name: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})

export class ShopCartService {

  constructor() { }

  items() {
    return DATA_ITEMS
  }



}
