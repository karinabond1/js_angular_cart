import { Component , OnInit, Input} from '@angular/core';
import { ShareService } from './services/share.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private ss: ShareService) {}
  get allId(){
    let allPricee = 0;
    this.ss.products.forEach(function(element) {
      allPricee++;
    })
    return allPricee-1;
  } 
}
