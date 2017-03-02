import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';
import { AngularFire } from 'angularfire2';
import { Geolocation } from 'ionic-native';

declare var google:any;


@Component({
  selector: 'page-track-callon-map',
  templateUrl: 'track-callon-map.html'
})
export class TrackCallonMapModal {
    map: any;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  callmarker: any;
  currentmarker: any;
  housecallSub: any;
  housecall: any = {};
  constructor(public viewCtrl: ViewController, public af: AngularFire, public maps: GoogleMaps, public navParams: NavParams, public platform: Platform) {

    this.platform.ready().then(() => {
      console.log('loading map', navParams.data);
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
        this.map = map;
        console.log(navParams.get('housecallid'));
        this.housecallSub = this.af.database.object('/housecalls/' + navParams.get('housecallid'))
          .subscribe(object => {
            this.housecall = object;
            this.addorUpdateMarker(this.callmarker, map, object.engineerlocation);
            map.setCenter(new google.maps.LatLng(object.engineerlocation.latitude, object.engineerlocation.longitude));
          });
        Geolocation.getCurrentPosition({ enableHighAccuracy: true, maximumAge: 0 }).then(position => {
          //position.coords
          this.addorUpdateMarker(this.currentmarker, map, { latitude: position.coords.latitude, longitude: position.coords.longitude });

        });
      });


    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  addorUpdateMarker(marker, map, coords) {
    if (google.maps) {
      //Convert locations into array of markers
      if (marker) {
        this.callmarker.setPosition(new google.maps.LatLng(coords.latitude, coords.longitude));
      } else {
        this.callmarker = new google.maps.Marker({
          position: { lat: coords.latitude, lng: coords.longitude },
          label: '',
          map: map
        });
      }

    } else {
      console.warn('Google maps needs to be loaded before adding a cluster');
    }

  }

}
