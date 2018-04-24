import { Component } from '@angular/core';
import { ModalController, NavController, ItemSliding } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo'
import { TodoDetailPage } from '../todo-detail/todo-detail';
import { Data } from '../../providers/data/data';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
  private quote: string = "";
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
              public dataService: Data, public quotesService: QuotesProvider,
              public http: HttpClient) {
                
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
      this.http.get('../../assets/json/cats.json').subscribe((result)=>{
        console.log (result[0]['catimgurl'])
        for(var i= 0; i < this.items.length; i++ ){
          this.items[i]['thumbnail'] = result[0]['catimgurl']
        }
        //this.items[0]['thumbnail'] = result[0]['catimgurl']
        
      })
 
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
        this.http.get('../../assets/json/cats.json').subscribe((result)=>{
          console.log (result[0]['catimgurl'])

          for(var i= 0; i < this.items.length; i++ ){
            this.items[i]['thumbnail'] = result[0]['catimgurl']
          }
          
        })
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

 
