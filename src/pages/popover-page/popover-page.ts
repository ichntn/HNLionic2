import {Component} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'popover-page.html'
})
//AIzaSyAw-nFMN2BmqvIJFVdtMqe6shhZQq7uuVA
export class PopoverPage {
  items = [
    10,
    20,
    30,
    40
  ];
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    
  }

  ngOnInit() {
  }

  itemSelected(km) {
    this.viewCtrl.dismiss(km).then((res) => {
      
    });
  }
}