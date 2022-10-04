import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../foods';

@Component({
  selector: 'fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {
  @Input() food:Food
  constructor() { }

  ngOnInit(): void {
  }

}
