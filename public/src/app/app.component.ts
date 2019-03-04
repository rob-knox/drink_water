import { Component, OnInit } from '@angular/core';
import { Facts } from './models/Facts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  facts: Facts[];
  weight: number;
  min: any;
    
  constructor() {}

  ngOnInit() {
    this.facts = [
      {
        id: 1,
        tip: 'Tip 1',
      },
      {
        id: 2,
        tip: 'Tip 2',
      },
      {
        id: 3,
        tip: 'Tip 3',
      }
    ]
    // Cycle through facts
    let slides = this.facts;
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000);
    function nextSlide() {
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].tip;
    }

  }
  onSubmit() {
    var minutes = this.min * 1000 * 60;
    console.log(this.min);
    setInterval(function() {
      alert("Drink Water");
    }, minutes);
  }

  inputChange(min:string):void{this.min=min}

}