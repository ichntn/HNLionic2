import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { LabReportPage } from '../lab-report/lab-report';
import { PopoverGeneric } from '../popover-generic/popover-generic';


/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  reports: Array<{ title: string, date: string, filePath: string,provider:string, accession:string ,datetime:string}>;

    dateSortedReport = [
      { title: 'Report One', date: "2017-02-12", filePath: 'assets/labReport.pdf',provider:"ANDRAW BLACK", accession:"N10004063",datetime:"10 MAR", imagePath: 'assets/img/10Mar.png' },
      { title: 'Report Two', date: "2017-01-10", filePath: 'assets/labReport.pdf',provider:"BURTON MARK", accession:"N10004065" ,datetime:"13 MAR", imagePath: 'assets/img/13Mar.png'},
      { title: 'Report Three', date: "2016-12-12", filePath: 'assets/labReport.pdf' ,provider:"ANDRAW BLACK", accession:"N10004083",datetime:"16 MAR", imagePath: 'assets/img/16Mar.png'},
      { title: 'Report Four', date: "2016-06-10", filePath: 'assets/labReport.pdf' ,provider:"BURTON MARK", accession:"N10004083",datetime:"18 MAR", imagePath: 'assets/img/18Mar.png'}
    ];

    providerSortedReport = [
      { title: 'Report One', date: "2017-02-12", filePath: 'assets/labReport.pdf',provider:"ANDRAW BLACK", accession:"N10004063",datetime:"10 MAR" , imagePath: 'assets/img/10Mar.png'},
      { title: 'Report Three', date: "2016-12-12", filePath: 'assets/labReport.pdf' ,provider:"ANDRAW BLACK", accession:"N10004083",datetime:"16 MAR", imagePath: 'assets/img/16Mar.png'},
      { title: 'Report Two', date: "2017-01-10", filePath: 'assets/labReport.pdf',provider:"BURTON MARK", accession:"N10004065" ,datetime:"13 MAR", imagePath: 'assets/img/13Mar.png'},
      { title: 'Report Four', date: "2016-06-10", filePath: 'assets/labReport.pdf' ,provider:"BURTON MARK", accession:"N10004083",datetime:"18 MAR", imagePath: 'assets/img/18Mar.png'}
    ];


  constructor(public navCtrl: NavController, public navParams: NavParams,private popoverCtrl: PopoverController) {

    this.reports = this.dateSortedReport; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  itemSelected(report :any)
  {
        this.navCtrl.push(LabReportPage, report);
  }

presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverGeneric, {options:["By Date", "By Provider"]
    });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss((sortOption) => {

      switch(sortOption)
      {
        case "By Provider":
        this.reports = this.providerSortedReport;
        break;
        default:
        this.reports = this.dateSortedReport; 
        break;
      }
      console.log("print option is " + sortOption);
    })
  }

}
