import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ////////////
  public lineChartData:Array<any> = [
        [0, 100, 0, 0, 0, 203, 0]
  
  ];
  public lineChartLabels:Array<any> = ['Mon', 'Tue','Wed', 'Thu','Fri', 'Sat','Sun'];
  public lineChartType:string = 'bar';
  public graphtype : string = 'Weekly';

  private lineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend : {
 display : false,


    }
  };

 public MonthlyChartData:Array<any> = [
     [100, 180, 170, 130] 
    
  ];
  public MonthlyLabels:Array<any> = ['Week1', 'Week2', 'Week3', 'Week4'];
  public MonthlyChartType:string = 'line';

 public AllChartData:Array<any> = [
     [145, 165, 170, 155] ,[145, 165, 170, 155] ,[145, 165, 170, 155] ,[145, 165, 170, 155] 
    
  ];
  public AllLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'April'];
  public AlllChartType:string = 'line';

}
