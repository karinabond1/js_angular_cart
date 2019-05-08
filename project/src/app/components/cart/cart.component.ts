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

  get listForShop(){
    return this.ss.listForCart;
  }

}
