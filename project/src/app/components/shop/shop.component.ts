import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private ss: ShareService) { }

  ngOnInit() {
  }

  add(index){
    this.ss.listForCart.forEach((product) => {
      if(/*product.id != index*/ this.ss.listForCart.indexOf(this.ss.listForShop[index])<0){
        this.ss.listForShop[index].count++;
        this.ss.listForCart.push(this.ss.listForShop[index]);
        this.ss.products.push(this.ss.listForShop[index]);
        //this.ss.listForCart[index].count++;
      }else if(index === product.id){        
        product.count++;
      }
      localStorage.shop = JSON.stringify(this.ss.listForCart);
    })
    
    /*this.ss.listForCart.push(this.ss.listForShop[index]);
    this.ss.listForCart[index].count++;*/
  }

  get listForShop(){
    return this.ss.listForShop;
  }

}
