import { Component, OnInit, Input} from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  title ='Hello Angular';
  new_item = "";
  constructor(private ss: ShareService) {}
  //todo = JSON.parse(localStorage.getItem('todo') || '[]');
  ngOnInit() {
  }

  add(){
    this.list.push(this.new_item);
    //this.todo.push(this.new_item);
    this.new_item = "";
    //this.todo
  }

  get count_items(){
    return this.list.length;
  }

  remove(index){
    this.list.splice(index, 1);
    //this.todo.splice(index,1);
  }

  get list(){
    return this.ss.list;
  }

}
