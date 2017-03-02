import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import {Page1} from '../page1/page1';

import {LoginNewPage} from '../login-new/login-new';


@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})


export class DemoPage {

  data: Array<{title: string, description: string, image: string}> = [];

  constructor(public navCtrl: NavController) {
this.data.push({
      title: "Welcome to Health Network Laboratories!",
      description: "The <b>Health Network Laboratories (HNL)</b> offers advanced laboratory diagnostic testing at convenient testing locations",
      image: "assets/img/welcome.png",
    });

    this.data.push( {
      title: "Track Your Fitness",
      description: "Health is wealth, keep track of your fitness stats with us",
      image: "assets/img/trackFitness.png",
    });
    this.data.push({
      title: "View Your Test Results",
      description: "Get your test results as soon as they are available",
      image: "assets/img/testResults.png",
    });
    this.data.push({
      title: "Schedule House Call",
      description: "Get blood work done in comfort of your own home",
      image: "assets/img/scheduleHouseCall.png", 
    });
    this.data.push({
      title: "Find Centre Near You",
      description: "Allows you to find Patient Service Centre near you and check in remotely to avoid waiting time",
      image: "assets/img/nearServiceCentre.png",
    });


  }

navigatetohome(event) {
this.navCtrl.setRoot(LoginNewPage);

}


}
