import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, PopoverController } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';
import { GoogleMapsCluster } from '../../providers/google-maps-cluster';
import { ListWithStorePage } from '../list-with-store/list-with-store';
import { PscDetailPage } from '../psc-detail/psc-detail';
import { PopoverPage } from '../popover-page/popover-page';
import { StoreProvider } from '../../providers/store';
import { Geolocation } from 'ionic-native';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

declare var google: any;

@Component({
  selector: 'page-map-with-store',
  templateUrl: 'map-with-store.html'
})
export class MapWithStorePage {
  isBackVisible: Boolean = false;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  map: any;
  markerCluster: any;
  locations: any;
  currentLocation: any;
  onlyLatLngLocations: any[] = [];
  markers: any = [];
  bounds: any;
  @ViewChild('flipContainer') flipContainer: ElementRef;
  sortStatus: string = 'ascend';

  constructor(public navCtrl: NavController, public storeProvider: StoreProvider, private popoverCtrl: PopoverController, public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {


  }

  ionViewDidLoad(): void {
    console.log('map loading');
    this.locations = this.storeProvider.stores_list;
    this.locations.forEach((item, index, arr) => {
      this.onlyLatLngLocations.push(item.Latitude + ',' + item.Longitude);
    });
    this.platform.ready().then(() => {
      console.log('loading map');

      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
        this.map = map;
        Geolocation.watchPosition({ maximumAge: 0, enableHighAccuracy: true })
          .subscribe((location) => {
            //location.coords.latitude
            this.currentLocation = location.coords.latitude + ',' + location.coords.longitude;
            //this.map.setCenter(this.currentLocation);
            //location.coords.latitude + ',' + location.coords.longitude
            //Hardcoded to 30
            this.calclateDistance(this.currentLocation, 30);
          })
        this.bounds = new google.maps.LatLngBounds();
        this.addMarkerswithCluster(map, this.locations);
      });

    });

  }

  ionViewDidEnter() {
  }
  toggleView() {
    // this.navCtrl.setRoot(ListWithStorePage);
    this.flipContainer.nativeElement.classList.toggle('flip');
    this.isBackVisible = !this.isBackVisible;
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage, {
    });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss((rangeinkm) => {
      if (rangeinkm != -1 && rangeinkm != null) {
        this.calclateDistance(this.currentLocation, rangeinkm);
      }
      else if (rangeinkm == -1) {

        this.clearMarkers();
        this.bounds = new google.maps.LatLngBounds();
        this.locations = this.storeProvider.stores_list;;
        this.addMarkerswithCluster(this.map, this.locations);
      }
    })
  }
  calclateDistance(location, rangeinkm) {
    this.maps.getNearbyLocations(location, this.onlyLatLngLocations)
      .then(res => {
        this.map.setCenter(this.currentLocation);
        console.log('distanceapi', res);
        var nearbylocations: any[] = [];
        var original_json = this.storeProvider.stores_list;
        for (var i = 0; i < res.length; i++) {
          original_json[i].distanceValue = res[i].distanceValue;
          original_json[i].durationValue = res[i].durationValue;
          if (Math.round(res[i].distanceValue / 1000) < rangeinkm) {
            nearbylocations.push(original_json[i]);
          }
        }
        this.locations = nearbylocations;
        console.log(nearbylocations);
        this.clearMarkers();
        this.bounds = new google.maps.LatLngBounds();
        this.addMarkerswithCluster(this.map, nearbylocations);
      })
      .catch(err => {
        this.map.setCenter(new google.maps.LatLng(location));
      })
  }
  toPSCDetail(store: any) {
    this.navCtrl.push(PscDetailPage, store);
  }
  clearMarkers() {
    console.log(this.markers);
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    if (this.markerCluster) {
      this.markerCluster.clearMarkers();
    }

    this.markers = [];
    this.bounds = null;
    //this.map.clear();
  }
  addMarkerswithCluster(map, locations: any[]) {
    if (google.maps) {
      //Convert locations into array of markers
      console.log(locations);
      this.markers = locations.map((item) => {
        this.bounds.extend(new google.maps.LatLng(item.Latitude, item.Longitude));
        let marker = new google.maps.Marker({
          position: { lat: item.Latitude, lng: item.Longitude },
          label:  item.WaitTimeDescription.match(/\d+/g),
          map: map
        });
        marker.set('id', item.ClientID);
        this.attachmyEvents(marker);
        return marker;
      });
      console.log(this.markers);
      this.markerCluster = new MarkerClusterer(map, this.markers, { imagePath: 'assets/img/m' });
      map.fitBounds(this.bounds);
    } else {
      console.warn('Google maps needs to be loaded before adding a cluster');
    }

  }

  attachmyEvents(marker) {
    marker.addListener('click', () => {
      console.log(marker.get('id'));
      let selected_marker = this.locations.filter((item) => {
        return item.ClientID == marker.get('id');
      });
      this.navCtrl.push(PscDetailPage, selected_marker[0])
    });
  }


}
