import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weight: number;
  min: any;

    
  constructor() {}

  ngOnInit() {


  }
  onSubmit() {
    var minutes = this.min * 1000 * 60;
    console.log(this.min);
    setInterval(function() {
      alert("Drink Water");
    }, minutes);
  }


}