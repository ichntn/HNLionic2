import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InsuranceInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-insurance-info',
  templateUrl: 'insurance-info.html'
})
export class InsuranceInfoPage {

items = ["Aetna Accountable Care Network/Valley Preferred", "Aetna Affordable Health Choices", "Aetna Better Health", "Aetna Choice POS", "Aetna Choice POS II", "Aetna Golden Choice", "Aetna Golden Medicare", "Aetna HealthFund Health Reimbursement Arrangement (HRA)", "Aetna HealthFund Health Savings Account", "Aetna Medicare Open Choice", "Aetna Open Access Elect Choice", "Aetna Open Access HMO", "Aetna Open Access Managed Choice", "Aetna Select", "Aetna Signature Administrators", "Elect Choice (EPO)", "HMO", "Managed Choice POS", "Open Access Aetna Select", "Open Choice PPO", "QPOS ", "Traditional Choice", "Medi-Care Select", "Medicare Supplement", "Today’s Optins", "AmeriHealth Administrators", "AmeriHealth HMO", "AmeriHealth Personal Choice", "Smart Value Classic", "Smart Value Enhanced Plus", "Smart Value Plus", "Smart Value Enhanced", "Open access model plans ", "First Health Network", "Mail Handlers Benefit Plan", "Gateway Health Plan HMO", "Gateway Health Plan Medicare Assusred", "Carpenteres Health & Welfare Fund Philadelphia & Vacinity (IBC)", "Ironworkers Phila & Vacinity Benefit Plan (IBC)", "IUOE Local 542 Benefit Plan (IBC)", "Teamster Health & Welfare Fund (Horizon)", "Premier", "Premier Plus", "Value", "Value Plus", "Keystone Central SecureChoice", "FreedomBlue PPO", "HM Health Insurance Co. d/b/a Highmark Health", "Short Term Blue PPO", "Highmark West Virginia d/b/a Mountain State BC/BS", "Network Access Arrangements", "Humana Gold Choice PFFS", "Humana Group Medicare PFFS", "Keystone 65", "Keystone Health Plan East", "Keystone Point of Service", "Personal Choice", "Personal Choice 65", "EPO Plans", "HMO Plans", "Indemnity Plans", "International", "Medicare Access Plans", "Medicare Access Plus Plans", "NALC", "Open Access", "POS", "PPO Health Plans", "SAMBA", "Worldwide"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceInfoPage');
  }

}
