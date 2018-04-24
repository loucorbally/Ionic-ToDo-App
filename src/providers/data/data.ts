import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
 
@Injectable()
export class Data {
 
  constructor(public storage: Storage){
 
  }

  public items = [];
 
  getData() {
     this.storage.get('todos').then((todos) => {
      this.items = todos;
    });
    return this.storage.get('todos'); 
  }
 
  save(data){
    this.storage.set('todos', data);
  }
 
  delete(item){


    for(var i = 0; i < this.items.length; i++) {
      //console.log("Now checking todo "+item['title']);
     
      if(this.items[i] == item){
        console.log("Current todo: "+item);

        this.items.splice(i, 1);
      }
 
    }
}
}