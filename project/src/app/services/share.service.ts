import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  list = [
    'First',
    'Second'
  ];
  

  listForShop = [
    {
      id: 0,
      name: "milk",
      price: 100,
      count: 0
    },
    {
      id: 1,
      name: "bread",
      price: 200,
      count: 0
    },
    {
      id: 2,
      name: "oil",
      price: 300,
      count: 0
    },
    {
      id: 3,
      name: "apple",
      price: 400,
      count: 0
    },
    {
      id: 4,
      name: "carrot",
      price: 500,
      count: 0
    },
    {
      id: 5,
      name: "banana",
      price: 600,
      count: 0
    }
  ];

  listForCart = [{
    id: 5,
    name: "banana",
    price: 600,
    count: 0
  }];

  products = JSON.parse(localStorage.shop || JSON.stringify(this.listForCart));
  constructor() {
    
  }

  

}
