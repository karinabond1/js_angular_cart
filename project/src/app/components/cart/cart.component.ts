import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ss: ShareService) { }

  ngOnInit() {
  }

  get allPrice(){
    let allPricee = 0;
    this.ss.products.forEach(function(element) {
      allPricee+=element.price*element.count;
    })
    return allPricee;
  }

  remove(index){
    //this.ss.listForShop[index].count--;
    //this.todo.splice(index,1);
    this.ss.listForCart.splice(index,1);
    this.ss.products.splice(index,1);
    localStorage.shop = JSON.stringify(this.listForCart);
  }

  get listForCart(){
    /* this.ss.listForShop.forEach(function(element) {
      if(element.count>0){
        this.listForCart.push(element);
      }
    }); */
    
    return this.ss.products;
  }

  /*get ids() {
    
    return Object.keys(this.listForCart);
  }*/

  /*get listForShop() {
    let map = {};

    this.ss.listForShop.forEach((product) => {
      if(product.count>0){
        map[product.id] = product;
      }
      
    })
    
    return map;
  }*/

}
