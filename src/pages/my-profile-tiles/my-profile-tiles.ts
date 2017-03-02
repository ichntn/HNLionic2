import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';


import {PatientPage} from '../patient/patient';
import {InsuranceInfoPage} from '../insurance-info/insurance-info';
import {PaymentPage} from '../payment/payment';
import {SharedAccountPage} from '../shared-account/shared-account';
import {NotificationsPage} from '../notifications/notifications';
import {WellnessPage} from '../wellness/wellness';
import { InAppBrowser } from 'ionic-native';


/*
  Generated class for the MyProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-profile-tiles',
  templateUrl: 'my-profile-tiles.html'
})
export class MyProfileTilesPage {

grid: Array<Array<{Key:string, Image:string}>>; //array of arrays

  

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
this.grid = Array(3);

this.grid[0] = Array(2);

this.grid[0][0] = {Key: "PatientPage", Image : "assets/img/online-patient.png"};
this.grid[0][1] = {Key: "PaymentPage", Image : "assets/img/pay-your-bill.png"};

this.grid[1] = Array(2);


this.grid[1][0] = {Key: "InsuranceInfoPage", Image : "assets/img/view-health.png"};
this.grid[1][1] = {Key: "SharedAccountPage", Image : "assets/img/view-lab-results.png"};

this.grid[2] = Array(2);

this.grid[2][0] = {Key: "NotificationsPage", Image : "assets/img/online-patient.png"};
this.grid[2][1] = {Key: "WellnessPage", Image : "assets/img/pay-your-bill.png"};


  }

 showPage(event, key)  
 {
switch(key) {
case "PatientPage" : 
 this.navCtrl.push(PatientPage);
break;
case "PaymentPage" : 
 this.openPaymentPage();
break;
case "InsuranceInfoPage" : 
 this.navCtrl.push(InsuranceInfoPage);
break;
case "SharedAccountPage" : 
 this.navCtrl.push(SharedAccountPage);
break;
case "NotificationsPage" : 
 this.navCtrl.push(NotificationsPage);
break;
case "WellnessPage" : 
 this.navCtrl.push(WellnessPage);
break;
}

 } 

   openPaymentPage() {
        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://secureportal.healthnetworklabs.com/patientportal/onetimepayment.aspx",'_blank');

        });
  }  
}
