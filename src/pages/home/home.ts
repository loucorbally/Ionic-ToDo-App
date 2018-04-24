import { Component } from '@angular/core';
import { ModalController, NavController, ItemSliding } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo'
import { TodoDetailPage } from '../todo-detail/todo-detail';
import { Data } from '../../providers/data/data';
import { QuotesProvider } from '../../providers/quotes/quotes';

 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
  private quote: string = "I like pingas - Ryan";
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
              public dataService: Data, public quotesService: QuotesProvider) {
                
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });

 
  }
 
  ionViewDidLoad(){
     this.quotesService.getQuote().then((quoteOfDay) =>{
      this.quote = quoteOfDay;
      console.log(quoteOfDay);
      
    });
    console.log(this.quote);  
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
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
  deleteItem(item){
   
      this.dataService.delete(item);
  
  }
  delete(item){
    for(var i = 0; i < this.items.length; i++) {
      //console.log("Now checking todo "+item['title']);
     
      if(this.items[i] == item){
        console.log("Current todo: "+item);

        this.items.splice(i, 1);

      }
    }
    this.dataService.save(this.items);
  }
  }

 
