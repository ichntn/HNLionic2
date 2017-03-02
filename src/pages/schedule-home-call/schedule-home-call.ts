import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewTestPage } from '../view-test/view-test';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TrackCallonMapModal } from '../track-callon-map/track-callon-map';

/*
  Generated class for the ScheduleHomeCall page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule-home-call',
  templateUrl: 'schedule-home-call.html',
  providers: [Storage]
})
export class ScheduleHomeCallPage {
  housecallsList: any[] = [];
  storage: Storage;
  nohousecall: boolean = true;
  housecallsListSub: any;
  myhousecalls = [];

  constructor(public navCtrl: NavController, storage: Storage, public af: AngularFire, public modalCtrl: ModalController) {
    this.storage = storage;
    this.storage.get("user-appointments").then((val) => {
      if (val != null) {
        this.myhousecalls = JSON.parse(val);
        if (this.myhousecalls.length > 0) {
          this.nohousecall = false;
        }
      }
    });

    console.log(this.nohousecall);
  }

  placehousecall(event) {
    console.log('Called');
    this.navCtrl.push(ViewTestPage);
  }

  deletehousecall(itemkey) {
    console.log(itemkey);
    this.af.database.object('/housecalls/' + itemkey).remove();
  }
  ionViewDidEnter() {
    this.housecallsListSub = this.af.database.list('/housecalls').subscribe(list => {
      console.log('got data')
      this.housecallsList = list;
      console.log(this.housecallsList)

      if (this.housecallsList.length > 0) {
        this.nohousecall = false;
      }
    });

  }
  trackCall(call) {
    if (call.callinitiated) {
      console.log(call);
      let profileModal = this.modalCtrl.create(TrackCallonMapModal, { housecallid: call.$key });
      profileModal.present();
    }
  }
  ionViewDidLeave() {
    this.housecallsListSub.unsubscribe();
  }
}
