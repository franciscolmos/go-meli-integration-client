import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../../services/items.service'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumnsItems: string[] = ['Title', 'Quantity', 'Price', 'FirstPicture'];
  displayedColumnsSalesOrders: string[] = ['Sold_Items' , 'Sale_date', 'Total', 'Total_Delivery'];
  displayedColumnsUnansweredQuestions: string[] = ['Question_date', 'Title', 'Question_text',];
  subscriptions: Subscription[] = [];
  dashboard: any
  constructor(
    private spinner: NgxSpinnerService,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code);
    this.itemsService.getAccessToken(code)
    .subscribe(
      (token) => {
        console.log(token)
      }
    )
    this.itemsService.getDashboard()
    .subscribe(
      (dashboard) => {
        console.log(dashboard)
        this.dashboard =  dashboard;
      },
      (error) => {
        console.error(error);
          return;
      }
      )
    }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
