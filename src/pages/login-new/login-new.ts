import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import {InAppBrowser,InAppBrowserEvent} from 'ionic-native';

/*
  Generated class for the LoginNew page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-new',
  templateUrl: 'login-new.html'
})
export class LoginNewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private events:Events) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginNewPage');
  }

  loginUser() {
    //this.navCtrl.setRoot(MapWithStorePage);
    let browser = new InAppBrowser("https://crsprtdev-myhnlaccess.cs59.force.com/Patients/MYH_DummyLogin_VFP", '_blank', "location=no,clearcache=yes");
    browser.on("loadstart")
            .subscribe(
            (evnt:InAppBrowserEvent) => {

              console.log(evnt.url);
              
              let fedAuthIndex = evnt.url.indexOf('Success');
              if(fedAuthIndex > -1)
              {
                this.events.publish('user:login', "User logged in");
                console.log("Harry Success while login");
                browser.close();
              }
              fedAuthIndex = evnt.url.indexOf('failure');
              if(fedAuthIndex > -1)
              {
                this.events.publish('user:loginerror', "User logged in");
                console.log("Harry error while login");
                browser.close();
              }
            },
            err => {
                console.log("InAppBrowser loadstart Event Error: " + err);
                browser.close();                
            });
    browser.show();
  }
}
