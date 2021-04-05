import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts() {
    return [
      {
        name: 'ส้มโอ',
        price: 111
        },
        {
        name: 'แตงโม',
        price: 222
        },
        {
        name: 'มะพร้าวนํ้าหอม',
        price: 333
        },
        ];
  }
}
