import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Faq page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-faq-billing',
  templateUrl: 'faq-billing.html'
})

export class FaqBillingPage {

  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

  constructor(public navCtrl: NavController) {

     this.data.push({
          title: 'My insurance information on the site is wrong. How can I change it? ',
          details: 'The insurance information is from our files. For security reasons, you cannot change this information. Please call our billing Customer Service phone number, listed on your invoice at, 1-844-HNL-BILL',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

        this.data.push({
          title: 'How can I tell if you accept my insurance?',
          details: 'It is always best to check with your insurance carrier. However, we do offer a list of participating insurance carriers on our corporate website, www.healthnetworklabs.com.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

           this.data.push({
          title: 'Why do I have a different invoice number each time I have services performed? How does this affect making payments online?',
          details: 'Our billing system generates transactional specific invoices. Due to patient privacy issues, our system does not store information regarding the patient from transaction to transaction. Each transaction generates a new invoice number. Therefore, if paying online, the online invoice number must match the actual paper invoice so the payment can be applied to the correct invoice.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

           this.data.push({
          title: 'How can I pay this invoice online?',
          details: 'You can pay your invoice directly from this website by clicking on My Profile, and then the Payment link. From here, click the Make Payment button to submit your payment.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

           this.data.push({
          title: 'Why is the invoice for my testing mailed to my spouse?',
          details: 'The insurance policyholder is responsible for payment of co-insurance, co-payments and/or deductibles incurred for covered services provided to you as a covered dependent. If the invoice is addressed to your spouse, it is likely your spouse is the insurance policyholder.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

           this.data.push({
          title: 'What methods of payments does HNL accept?',
          details: 'Health Network Labs accepts online VISA, MasterCard, and Discover card payments. You may also pay your invoice by mail with a check.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

        
           this.data.push({
          title: 'Is my payment information secure?',
          details: 'We all are concerned about website privacy and the security of the information we transmit over the Internet. When paying your bills online through the HNL hosted bill payment application (Converge) be assured that your information is secure, both during transmission over the Internet and within the application itself. This application uses industry standard encryption on every page in our system. In order to maintain compliance with security every year we must pass a PCI compliance process.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

        
           this.data.push({
          title: 'Why am I being charged for additional testing which was not on my original test order?',
          details: 'There are two reasons that an additional test, which was not originally ordered by your physician, would be performed. The first is that your physician may have called the laboratory to request additional testing after the order was submitted. The second is that one of the tests your physician ordered may have been a reflex test. Reflex testing may result in an additional test being performed depending on the results of the original test. The reflex test is performed to get more detailed information about the findings of the initial test.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

        
        

        
           this.data.push({
          title: 'I do not understand my invoice, who can I call?',
          details: 'If you need further assistance with your statement, please call our Billing Customer Service phone number listed on your invoice, 1-844-HNL-BILL.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });

       
        
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }

}
