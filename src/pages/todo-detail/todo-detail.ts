import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'todo-detail.html'
})
export class TodoDetailPage {
 
  title;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }
 
}