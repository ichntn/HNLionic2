import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {PatientPage} from '../patient/patient';
import {InsuranceInfoPage} from '../insurance-info/insurance-info';
import {PaymentPage} from '../payment/payment';
import {SharedAccountPage} from '../shared-account/shared-account';
import {NotificationsPage} from '../notifications/notifications';
import {WellnessPage} from '../wellness/wellness';

/*
  Generated class for the MyProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {

  tab1Root: any = PatientPage;
  tab2Root: any = InsuranceInfoPage;
  tab3Root: any = PaymentPage;
  tab4Root: any = SharedAccountPage;
  tab5Root: any = NotificationsPage;
  tab6Root: any = WellnessPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
