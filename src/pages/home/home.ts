import { Component } from '@angular/core';
import { ModalController, NavController, ItemSliding } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo'
import { TodoDetailPage } from '../todo-detail/todo-detail';
import { Data } from '../../providers/data/data';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddTodoPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(TodoDetailPage, {
      item: item
    });
  }

}