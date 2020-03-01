import { Component, OnInit, Input } from '@angular/core';
import { HttpGetService } from '../../services/http-get.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  constructor(private CustomerData$: HttpGetService) {}
  public customersData: any;
  public error: string;
  public selectedCustomerData: any = [];
  public selectedFullName: string;
  public selectedMainAddress: string;
  public selectedSiteName: string;
  public selectedPhoneNumber: string;
  public selectedUnitList: string;
  public showSingleCustomer: boolean = false;
  public showNames: boolean = true;
  public showNumbers: boolean = true;

  searchTerm: string;
  label = 'X';
  placeholder = 'Search by Name';

  ngOnInit() {
    this.CustomerData$.getContent().subscribe(
      res => {
        this.customersData = res;
      },
      error => {
        console.log(error);
        this.error = error;
      }
    );
  }
  showCustomerInfo(selectedData) {
    this.showSingleCustomer = true;
    this.selectedFullName = selectedData.fullname;
    this.selectedMainAddress = selectedData.theMainAddress;
    this.selectedSiteName = selectedData.sitename;
    this.selectedPhoneNumber = selectedData.phone;
    this.selectedUnitList = selectedData.unitlist;
  }
  closeShow() {
    this.showSingleCustomer = false;
  }
  sortType(sort) {
    if (sort === 'customer_name_asc') {
      this.customersData.sort(this.sortByCustomerNameAsc);
      this.showNames = false;
    }
    if (sort === 'customer_name_dec') {
      this.customersData.sort(this.sortByCustomerNameDes);
      this.showNames = true;
    }
    if (sort === 'customer_number_up') {
      this.customersData.sort(this.sortByCustomerNumberAsc);
      this.showNumbers = false;
    }
    if (sort === 'customer_number_down') {
      this.customersData.sort(this.sortByCustomerNumberDes);
      this.showNumbers = true;
    }
  }

  sortByCustomerNameAsc(a, b) {
    if (a.fullname > b.fullname) return 1;
    else if (a.fullname === b.fullname) return 0;
    else return -1;
  }
  sortByCustomerNameDes(a, b) {
    if (a.fullname < b.fullname) return 1;
    else if (a.fullname === b.fullname) return 0;
    else return -1;
  }
  sortByCustomerNumberAsc(a, b) {
    return parseInt(a.customernumber) - parseInt(b.customernumber);
  }
  sortByCustomerNumberDes(a, b) {
    return parseInt(b.customernumber) - parseInt(a.customernumber);
  }
}
