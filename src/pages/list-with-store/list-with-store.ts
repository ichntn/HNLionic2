import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { PscDetailPage } from '../psc-detail/psc-detail';
import { MapWithStorePage } from '../map-with-store/map-with-store';
import {PopoverPage} from '../popover-page/popover-page';


@Component({
  selector: 'page-list-with-store',
  templateUrl: 'list-with-store.html'
})
export class ListWithStorePage {
  stores: any[] = [];
  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController,public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListWithStorePage');
  }
  tomapwithStores() {
    this.navCtrl.setRoot(MapWithStorePage);
  }
  ionViewDidEnter() {
   
  }
  toPSCDetail(store: any) {
    this.navCtrl.push(PscDetailPage, store);
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage,{
    });

    popover.present({
      ev: ev
    });
  }
}
