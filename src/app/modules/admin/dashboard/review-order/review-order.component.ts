import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLDetails } from 'src/app/constants/url-details';
import { HttpService } from './../../../shared/providers/http.service';
import { ToasterService } from './../../../shared/providers/toaster.service';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.scss']
})
export class ReviewOrderComponent implements OnInit {

  tableNumber : any = 1;
  totalBill = 0;
  model = new TableOrder();

  constructor(private route: ActivatedRoute, private httpService: HttpService,
    private toasterService: ToasterService, private router : Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.model.tableNumber = params['tableId'];
    });
    this.getTableOrder(this.model.tableNumber);
  }

  getTableOrder(tableNumber : any) {
    let ordersURL = URLDetails.ORDERS + tableNumber;
    this.httpService.get(ordersURL).subscribe(response => {
      this.onGetTableOrderSuccess(response);
    }, error => {
      this.onGetTableOrderError(error);
    });
  }

  onGetTableOrderSuccess(response : any) {
    if(response && response._id) {
      console.log('Order details : '+response);
      this.model = response;
    } else {
      // this.toasterService.showInfo("No Orders yet for this Table");
    }
  }

  onGetTableOrderError(error : any) {
    console.log('Erro getting Order details : '+error);
    this.toasterService.showError("Erro getting Order details");
  }

  payBill() {
    console.log('tableNumber : '+this.model.tableNumber);
    let ordersURL = URLDetails.ORDERS + this.model.tableNumber;
    this.httpService.put(ordersURL, { paymentMode : "CASH" }).subscribe(response => {
      this.onPayBillSuccess(response);
    }, error => {
      this.onPayBillError(error);
    });
  }

  onPayBillSuccess(result : any) {
    this.toasterService.showSuccess("Order completed");
    this.router.navigate(['admin']);
  }

  onPayBillError(error : any) {
    this.toasterService.showError("Error to save bill");    
  }

}

class TableOrder {

  public tableNumber: number = 1;
  public foodCategory : string = "";
  public menu : string = "";
  public tableOrders = <any[]>([]);
  public totalBill: number = 0;

  constructor() {  }

}