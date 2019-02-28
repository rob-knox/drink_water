import { Component, OnInit } from '@angular/core';
import { Facts } from './models/Facts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  facts: Facts[];
  amount_of_water = {pounds: ''};
  weight: number;
  min = document.querySelector('.min').innerHTML();
  convertedIntoMin = min * 1000;
  
  constructor() {}
  ngOnInit() {
    this.facts = [
      {
        id: 1,
        tip: 'Drinking Water Helps Maintain the Balance of Body Fluids. Your body is composed of about 60% water. The functions of these bodily fluids include digestion, absorption, circulation, creation of saliva, transportation of nutrients, and maintenance of body temperature.',
      },
      {
        id: 2,
        tip: 'Drinking Water Helps Maintain the Balance of Body Fluids. Your body is composed of about 60% water. The functions of these bodily fluids include digestion, absorption, circulation, creation of saliva, transportation of nutrients, and maintenance of body temperature.',
      },
      {
        id: 3,
        tip: 'Drinking Water Helps Maintain the Balance of Body Fluids. Your body is composed of about 60% water. The functions of these bodily fluids include digestion, absorption, circulation, creation of saliva, transportation of nutrients, and maintenance of body temperature.',
      }
    ]
  }
  onSubmit() {
    setInterval(function() {
      alert("Drink Water");
    }, convertedIntoMin);
  }
}