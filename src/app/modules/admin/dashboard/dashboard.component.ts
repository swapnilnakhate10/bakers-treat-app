import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLDetails } from 'src/app/constants/url-details';
import { HttpService } from './../../shared/providers/http.service';
import { ToasterService } from './../../shared/providers/toaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tablesList = <any[]>([]);

  constructor(private router: Router, private httpService: HttpService, 
    private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.getAllTables();
  }

  getAllTables() {
    let ALL_TABLES = URLDetails.ALL_TABLES;
    this.httpService.get(ALL_TABLES).subscribe(response => {
      this.onGetAllTablesSuccess(response);
    }, error => {
      this.onGetAllTablesError(error);
    });
  }

  onGetAllTablesSuccess(response : any) {
    this.tablesList = response;
  }

  onGetAllTablesError(error: any) {
    console.log("Error getting Tables List : "+error);
    this.toasterService.showError("Error getting Tables List");
  }

  viewOrderDetails(tableId : any) {
    this.router.navigate(['admin/review-order/', tableId]);
  }

}
