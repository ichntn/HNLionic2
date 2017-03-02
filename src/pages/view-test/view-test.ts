import { Component } from '@angular/core';
import { NavController, NavParams,ToastController, ModalController,ViewController } from 'ionic-angular';
import {Storage}from '@ionic/storage';
import {BookHouseCallPage} from '../book-house-call/book-house-call';
import { TestDetailPage } from '../test-detail/test-detail';


/*
  Generated class for the ViewTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-test',
  templateUrl: 'view-test.html',
  providers : [Storage]
})
export class ViewTestPage {

avilabletest: Array<{title: string, selected: Boolean, id: Number, Description: string, Preparation:string, Use:string, TestProcessing:string, imgsrc:String}>;
  housecallappointment = {};
  
  isDisabled : boolean = true;

  storage: Storage; 
  testtoview;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController, storage: Storage,public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.storage = storage;
this.getavilabletests();
  }

itemSelected(event,item) {
item.selected = !item.selected;
this.checktestselected();
this.presentToast(item.title,item.selected);
}

movenext(event) {
  let selectedtest: Array<{title: string, selected: Boolean, id: Number, Description: string, Preparation:string,imgsrc:String}> = [];
for(let entry of this.avilabletest) {
if(entry.selected){

selectedtest.push(entry);
}
let val = JSON.stringify(selectedtest);
     this.storage.set("user-selectedtest", val);


}
this.navCtrl.push(BookHouseCallPage);
}

checktestselected() {
this.isDisabled = true;
for(let entry of this.avilabletest) {
if(entry.selected)
    {
    
    this.isDisabled = false;
    }
} 
}

presentToast(name, isaddedd) {
    let toast = this.toastCtrl.create({
      message: name + (isaddedd ? " added" : " removed"),
      duration: 2000,
      position:"top"
    });
    toast.present();
  }
  
 getavilabletests() {
  //TODO: This will be from store / API
  this.avilabletest = [];
    this.avilabletest.push({title: "Blood Typing Profile", selected: false, id: 1, Description: "Do you know if your blood type is A, B, AB, or O? Take this test and find out. You will also learn if your blood type is positive or negative.", Preparation:"There is no preparation for this test.", Use:"Do you know if your blood type is A, B, AB, or O? Take this test and find out. You will also learn if your blood type is positive or negative.", TestProcessing:"1-3 days", imgsrc:"assets/img/blood-typing-profile.jpeg"});
     this.avilabletest.push({title: "Complete Blood Count", selected: false, id: 2,Description: "This profile is used to check your general health status, as well as to screen for a variety of conditions that can affect your blood cells, including anemia, infections and cancers of the blood.", Preparation:"There is no preparation for this test.", Use:"This profile is used to check your general health status, as well as to screen for a variety of conditions that can affect your blood cells, including anemia, infections and cancers of the blood.", TestProcessing:"1 day", imgsrc:"assets/img/complete-blood-count-wdiff.jpeg"});
      this.avilabletest.push({title: "Diabetes Profile", selected: false, id: 3,Description: "This profile provides an in-depth look at your blood sugar level. If you have diabetes, it means that you have too much glucose in your blood. This profile includes the HA1C test which provides a comprehensive look at your blood sugar levels during the past three months. ", Preparation:"There is no preparation for this test.", Use:"This profile is used to check your general health status, as well as to screen for a variety of conditions that can affect your blood cells, including anemia, infections and cancers of the blood.", TestProcessing:"1-3 days", imgsrc:"assets/img/diabetes-profile.jpeg"});
       this.avilabletest.push({title: "Hepatitis B Profile", selected: false, id: 4,Description: "Hepatitis causes inflammation of your liver. There are several types of  hepatitis, including type B. This profile evaluates your exposure to the hepatitis B virus.", Preparation:"There is no preparation needed for this test.", Use:"Hepatitis causes inflammation of your liver. There are several types of  hepatitis, including type B. This profile evaluates your exposure to the hepatitis B virus.", TestProcessing:"1-3 days", imgsrc:"assets/img/hepatitis-b-profile.jpeg"});
       this.avilabletest.push({title: "Hepatitis C Profile", selected: false, id: 5,Description: "Hepatitis is an inflammation of your liver. There are several types of  hepatitis, including type C. This profile evaluates your exposure to the hepatitis C virus.", Preparation:"There is no preparation needed for this test. ", Use:"Hepatitis is an inflammation of your liver. There are several types of  hepatitis, including type C. This profile evaluates your exposure to the hepatitis C virus.", TestProcessing:"1-3 days",imgsrc:"assets/img/hepatitis-c-profile.jpeg"});
       this.avilabletest.push({title: "Hemoglobin Test", selected: false, id: 6,Description: "The hemoglobin test is often used to check for anemia, usually along with a hematocrit or as part of a complete blood count (CBC). The test may be used to screen for a number of conditions and diseases that affect red blood cells (RBCs) and/or the amount of hemoglobin in blood. Hemoglobin is the iron-containing protein found in all red blood cells that enables RBCs to bind to oxygen in the lungs and carry it to tissues and organs throughout the body.", Preparation:"There is no preparation for this test.", Use:"The hemoglobin test is often used to check for anemia, usually along with a hematocrit or as part of a complete blood count (CBC). The test may be used to screen for a number of conditions and diseases that affect red blood cells (RBCs) and/or the amount of hemoglobin in blood. Hemoglobin is the iron-containing protein found in all red blood cells that enables RBCs to bind to oxygen in the lungs and carry it to tissues and organs throughout the body.", TestProcessing:"1 day",imgsrc:"assets/img/hemoglobin-test.jpeg"});
       this.avilabletest.push({title: "Lipid Profile", selected: false, id: 7,Description: "This profile includes tests that help evaluate heart health and assess the risk for developing heart problems in the future.", Preparation:"You should not eat or drink anything except water for 12-14 hours before this test.", Use:"This profile includes tests that help evaluate heart health and assess the risk for developing heart problems in the future.", TestProcessing:"1 day", imgsrc:"assets/img/lipid-profile.jpeg"});
              this.avilabletest.push({title: "Specimen Collection", selected: false, id: 8,Description: "", Preparation:"", Use:"", TestProcessing:"", imgsrc :"assets/img/specimean_collection.jpeg"});
              this.avilabletest.push({title: "Other", selected: false, id: 9,Description: "", Preparation:"", Use:"", TestProcessing:"", imgsrc: "assets/img/other.jpeg"});
  }

  showtest(event, item) {
     event.stopPropagation();

this.testtoview = item;
  let modal = this.modalCtrl.create(TestDetailPage, {itemstring : JSON.stringify(item)});
    modal.present();
  }

}
