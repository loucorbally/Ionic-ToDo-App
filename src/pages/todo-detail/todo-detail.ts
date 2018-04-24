import { Component } from '@angular/core';
import { NavParams, IonicPage,NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'todo-detail.html'
})
export class TodoDetailPage {
 
  title;
  description;
  items;
  item;
 
  constructor(public navCtrl: NavController,public navParams: NavParams, public dataService: Data){
    
  }
 
  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

  delete(item){
    console.log(item)
    this.dataService.delete(item);
    this.navCtrl.pop();

}
 
  
  }
