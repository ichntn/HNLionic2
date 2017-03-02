import { Component } from '@angular/core';

import { NavController ,Events} from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,private events:Events) {
    
  }
  loginUser() {
    //this.navCtrl.setRoot(MapWithStorePage);
    this.events.publish('user:login', "User logged in");
  }

}