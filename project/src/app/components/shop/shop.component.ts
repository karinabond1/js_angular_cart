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
    this.ss.listForCart.push(this.ss.listForShop[index]);
  }

  get listForShop(){
    return this.ss.listForShop;
  }

}
