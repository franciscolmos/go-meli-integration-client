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
  }

  ngOnChanges():void {
    if(window.location.href.includes("/answer")){
      console.log("Sdgsdgd")
      this.answer = true
    }
    this.answer = false
  } 

}
