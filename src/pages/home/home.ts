import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
todos=[
  {
    "Name":"Take Pingers",
    "Finished": false
  },
  {
    "Name":"Take Hash",
    "Finished": false
  },
]
  constructor(public navCtrl: NavController) {

  }
  itemSelected(todo:String) {
    console.log("Selected Item", todo);
  }
}
