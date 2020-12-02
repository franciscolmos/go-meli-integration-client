import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  answer = false

  constructor() {}

  ngOnInit(): void {
    if(window.location.href.includes("/answer") ||
       window.location.href.includes("/form")   ||
       window.location.href.includes("/home")   ){
      this.answer = true
      return
    }
    this.answer = false
  }

  ngOnChanges():void {
    
  } 

}
