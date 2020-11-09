import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../../services/items.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumnsItems: string[] = ['Title', 'Quantity', 'Price', 'FirstPicture'];
  displayedColumnsSalesOrders: string[] = ['Sold_Items', 'Sale_date', 'Total', 'Total_Delivery'];
  displayedColumnsUnansweredQuestions: string[] = ['Question_date', 'Title', 'Question_text',];
  subscriptions: Subscription[] = [];
  dashboard: any
  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code);
    this.itemsService.getAccessToken(code)
    .subscribe(
      (result) => {
        console.log(result);
    })
    this.itemsService.getDashboard()
    .subscribe(
      (dashboard) => {
        console.log(dashboard)
        this.dashboard =  dashboard;
        console.log()
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
