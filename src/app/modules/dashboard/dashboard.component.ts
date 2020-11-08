import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../../services/items.service'

interface Item {
  title: String;
  quantity: Number;
  price: Number;
  picture: String;
}

interface Sale {
  soldItems: Object
  date: String
  total: Number
  totalDelivery: Number
}

interface Question {
  date: String
  title: String
  text: String
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title', 'quantity', 'price', 'picture'];
  subscriptions: Subscription[] = [];
  dashboard: object
  items: Array <Item>
  sales: Array <Sale>
  questions: Array <Question>
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
        this.dashboard =  JSON.parse(JSON.stringify(dashboard));
        console.log()
        for (var key in dashboard) {
          if (key == "Items") {
            this.items = (dashboard[key])
            //console.log(this.items)
          }else {
            if(key == "Sales_Orders") {
              this.sales = this.dashboard[key]
              //console.log(this.sales)
            }else {
              this.questions = this.dashboard[key]
              //console.log(this.questions)
            }
          }
        }
      })
      
      
    }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
