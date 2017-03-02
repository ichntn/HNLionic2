import { Component } from '@angular/core';
import { NavController, NavParams ,Platform} from 'ionic-angular';
import { AppVersion} from 'ionic-native';
import { InAppBrowser } from 'ionic-native';

/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var window;

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsPage {

  appversion: string;

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  onPageLoaded() {
    AppVersion.getVersionNumber().then(res => {
      this.appversion = res;
    });
  }

  openSurvey1() {
        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://www.surveymonkey.com/r/TJ5WJXJ",'_blank');

        });
  }  

  openSurvey2() {
        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://www.surveymonkey.com/r/F22H7TXm",'_blank');

        });
  } 

    openmyhnllink() {
        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://myhnlaccess.force.com",'_blank');

        });
  } 

  callIT(passedNumber){
     window.location = passedNumber;
    } 
}
