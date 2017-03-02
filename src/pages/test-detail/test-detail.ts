import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController} from 'ionic-angular';
import {Storage}from '@ionic/storage';

/*
  Generated class for the TestDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-detail',
  templateUrl: 'test-detail.html',
  providers : [Storage]

})
export class TestDetailPage {

  test = {};
  
  isDisabled : boolean = true;

  storage: Storage;

  constructor( storage: Storage, public params: NavParams,public viewCtrl: ViewController) {
    this.storage = storage;
     this.test = JSON.parse(this.params.get('itemstring'));

  }

    
  dismiss() {
    this.viewCtrl.dismiss();
}

}
