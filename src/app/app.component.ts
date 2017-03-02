import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,Events,AlertController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { ViewhealthPage } from '../pages/viewhealth/viewhealth';
import { PayyourbillPage } from '../pages/payyourbill/payyourbill';
import { ScheduleHomeCallPage } from '../pages/schedule-home-call/schedule-home-call';
import {HealthTipsPage} from '../pages/health-tips/health-tips';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {FaqPage} from '../pages/faq/faq';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {LoginNewPage} from '../pages/login-new/login-new';
import {MyProfileTilesPage} from '../pages/my-profile-tiles/my-profile-tiles';



import { MapWithStorePage } from '../pages/map-with-store/map-with-store';
import { ListWithStorePage } from '../pages/list-with-store/list-with-store';
import {LabReportPage} from '../pages/lab-report/lab-report';
import {DemoPage} from '../pages/demo/demo';

import { Pushfire } from '../providers/pushfire';
import {FaqTilesPage} from '../pages/faq-tiles/faq-tiles';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{ title: string, component: any, menuImage: string, menuselectedImage: string, active: boolean }>;

  constructor(public pushFire: Pushfire, 
              public platform: Platform,
              private events: Events,
              public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, menuImage: 'assets/img/sm-dashboard-grey.png', menuselectedImage: 'assets/img/sm-dashboard-blue.png', active: true },
      { title: 'My Profile', component: MyProfileTilesPage, menuImage: 'assets/img/sm-profile-grey.png', menuselectedImage: 'assets/img/sm-profile-blue.png', active: false },
      { title: 'My Lab Results', component: Page3Page, menuImage: 'assets/img/sm-lab_result-grey.png', menuselectedImage: 'assets/img/sm-lab_result-blue.png', active: false },
      { title: 'Visit Patient Service Center', component: MapWithStorePage, menuImage: 'assets/img/sm-location_search-grey.png', menuselectedImage: 'assets/img/sm-location_search-blue.png', active: false },
      { title: 'Schedule House Call', component: ScheduleHomeCallPage, menuImage: 'assets/img/sm-home_call-grey.png', menuselectedImage: 'assets/img/sm-home_call-blue.png', active: false },
//      { title: 'My Health', component: ViewhealthPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
//      { title: 'Pay Your Bill', component: PayyourbillPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'Health Library', component: HealthTipsPage, menuImage: 'assets/img/sm-library-grey.png', menuselectedImage: 'assets/img/sm-library-blue.png', active: false },
      { title: 'Contact Us', component: ContactUsPage, menuImage: 'assets/img/sm-contact_us-grey.png', menuselectedImage: 'assets/img/sm-contact_us-blue.png', active: false },
      { title: 'FAQ', component: FaqTilesPage, menuImage: 'assets/img/sm-faq-grey.png', menuselectedImage: 'assets/img/sm-faq-blue.png', active: false } ,


    ];

    events.subscribe('user:logout', (userEventData) => {
      this.nav.setRoot(LoginNewPage);
    });

    events.subscribe('user:loginerror', (userEventData) => {
      this.showLoginErrorAlert();
    });

    events.subscribe('user:login', (userEventData) => {
      this.nav.setRoot(DashboardPage);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {

    this.pushFire.configureFirebasePush();
    this.pushFire.subscribeTopic("HNLUser");

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {

    this.pages.forEach((item, index, arr) => {
      if (item.component == page.component) {
        item.active = true;
      }
      else {
        item.active = false;
      }
    });

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  showLoginErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error while login, Please check your Usename or Password.',
      buttons: ['OK']
    });
    alert.present();
  }

  logout()
  {
    this.events.publish('user:logout', "User logged out");
  }
}
