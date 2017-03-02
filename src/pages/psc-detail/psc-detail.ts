import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geofence, LaunchNavigatorOptions, LaunchNavigator } from 'ionic-native';

@Component({
  selector: 'page-psc-detail',
  templateUrl: 'psc-detail.html'
})
export class PscDetailPage {
  pscdetail: any = {};
  ImagePath: any = {};
  checkinStatus: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.pscdetail.ImagePath = '';
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // initialize the plugin
      Geofence.initialize().then(
        // resolved promise does not return a value
        () => console.log('Geofence Plugin Ready'),
        (err) => console.log(err)
      )
      Geofence.onNotificationClicked().subscribe(res => {
        console.log('gefence notification clicked', res);
      })
    })
  }

  navigateFromGooglemap(latlng) {
        if (this.platform.is('ios')) {
          window.open('maps:?daddr=' + latlng, '_system');
        }
        else if (this.platform.is('android')) {
          window.open('geo:daddr=' + latlng, '_system');
        }

/*
    LaunchNavigator.navigate([latlng])
      .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
      );*/
  }
  ionViewDidEnter() {
    this.pscdetail = this.navParams.data;
    console.log(this.pscdetail);
    console.log(Math.floor(this.pscdetail.durationValue % 3600 / 60));
    if (Math.floor(this.pscdetail.durationValue % 3600 / 60) > 30) {
      this.checkinStatus = true;
    }
    else {
      this.checkinStatus = false;
    }
  }
  checkin() {
  }
  notifyforCheckin() {
    this.addGeofence(this.pscdetail, 5);
  }
  addGeofence(pscdetail, radius) {
    //options describing geofence
    let fence = {
      id: pscdetail.ClientID, //any unique ID
      latitude: 19.091986, //pscdetail.Latitude, //center of geofence radius
      longitude: 72.827996,//pscdetail.Longitude,
      radius: radius, //radius to edge of geofence
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
        id: pscdetail.ClientID, //any unique ID
        title: "You are near your store", //notification title
        text: "You just arrived at " + pscdetail.AddressLine, //notification body
        openAppOnClick: true //open app when notification is tapped
      }
    }
    console.log(fence);
    Geofence.addOrUpdate(fence).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    Geofence.onTransitionReceived().subscribe(res => {
      console.log(res);
    })
  }
}
