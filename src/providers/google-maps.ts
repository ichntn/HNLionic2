import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Connectivity } from './connectivity';
import { Geolocation } from 'ionic-native';
import * as distanceAPI from 'google-distance';
declare var google:any;

@Injectable()
export class GoogleMaps {

  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any;
  //AIzaSyCyfY0MZsJ-osXXDTgQZcKZyzh8X9soBxc
  apiKey: string = '';

  constructor(public connectivityService: Connectivity) {
    distanceAPI.apiKey = 'AIzaSyDejNq_hdXSUjpRH7nIbckYokwGGEn3GZA';
  }

  init(mapElement: any, pleaseConnect: any, location?:any): Promise<any> {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;

    return this.loadGoogleMaps(location);

  }

  loadGoogleMaps(location?:any): Promise<any> {

    return new Promise((resolve) => {

      if (typeof google == "undefined" || typeof google.maps == "undefined") {

        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();

        if (this.connectivityService.isOnline()) {

          window['mapInit'] = () => {

            this.initMap(location).then((map) => {
              resolve(map);
            });

            this.enableMap();
          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if (this.apiKey) {
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
          }

          document.body.appendChild(script);

        }
      }
      else {

        if (this.connectivityService.isOnline()) {
          this.initMap().then((map) => {
            this.enableMap();
            resolve(map);
          });

        }
        else {
          this.disableMap();
        }

      }

      this.addConnectivityListeners();

    });

  }

  initMap(location?:any): Promise<any> {

    this.mapInitialised = true;

    return new Promise((resolve) => {

      //Geolocation.getCurrentPosition().then((position) => {

      //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let latLng = location || new google.maps.LatLng(40.732, -75.5332);
      console.log(location);
      let mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }

      this.map = new google.maps.Map(this.mapElement, mapOptions);
      resolve(this.map);

      //});

    });

  }

  disableMap(): void {

    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "block";
    }

  }

  enableMap(): void {

    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "none";
    }

  }

  addConnectivityListeners(): void {

    this.connectivityService.watchOnline().subscribe(() => {

      console.log("online");

      setTimeout(() => {

        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        }
        else {
          if (!this.mapInitialised) {
            this.initMap();
          }

          this.enableMap();
        }

      }, 1000);

    });

    this.connectivityService.watchOffline().subscribe(() => {

      console.log("offline");

      this.disableMap();

    });

  }
  getNearbyLocations(origins, destinations): Promise<any> {
    return new Promise((resolve, reject) => {
      distanceAPI.get(
        {
          origins: [origins],
          destinations: destinations,
          sensor: false,
          units: 'imperial'
        },
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        }
      )
    });
  }
}