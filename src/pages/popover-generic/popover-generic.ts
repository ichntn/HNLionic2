import {Component} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'popover-generic.html'
})
//AIzaSyAw-nFMN2BmqvIJFVdtMqe6shhZQq7uuVA
export class PopoverGeneric {
  items = [];
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.items = navParams.get('options');
  }

  ngOnInit() {
  }

  itemSelected(selectedOption) {
    this.viewCtrl.dismiss(selectedOption).then((res) => {
      
    });
  }
}