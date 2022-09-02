import { Component, OnInit } from '@angular/core';
import { URLDetails } from 'src/app/constants/url-details';
import { HttpService } from './../../shared/providers/http.service';
import { ToasterService } from './../../shared/providers/toaster.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  totalSale = 0;
  currentDate : any;
  minDate: Date = new Date();
  maxDate: Date = new Date();
  todaysOrders = <any[]>([]);

  constructor(private httpService: HttpService, private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.currentDate = new Date();
    this.maxDate = new Date();
    this.getTodaySale();
  }

  getData() {
    this.getTodaySale();
  }

  getTodaySale() {
    let DATEWISE_SALE = URLDetails.DATEWISE_SALE;
    let requestBody = {
      date : this.currentDate
    };
    this.httpService.post(DATEWISE_SALE, requestBody).subscribe(response => {
      this.onGetTodaySaleSuccess(response);
    }, error => {
      this.onGetTodaySaleError(error);
    });
  }

  onGetTodaySaleSuccess(response : any) {
    this.todaysOrders = response;
    this.totalSale = 0;
    for(let order of this.todaysOrders){
      this.totalSale = this.totalSale + order.totalBill;
    }
  }

  onGetTodaySaleError(error : any) {
    console.log("Error getting Today's Sale : "+error);
    this.toasterService.showError("Error getting Today's Sale");
  }

}