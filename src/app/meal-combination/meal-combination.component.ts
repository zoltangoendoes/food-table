import { Component, OnInit } from '@angular/core';
import { foodType, FoodTypes } from '../foods';

@Component({
  selector: 'meal-combination',
  templateUrl: './meal-combination.component.html',
  styleUrls: ['./meal-combination.component.css','../fooditem/fooditem.component.css','../hello.component.css']
})
export class MealCombinationComponent implements OnInit {

  constructor() { }
  public static mealcombinations:any[]= [
    [
     "fruit",
     "protein",
     "grain",
    ],
    [
      "fruit",
      "protein",
      "vegetable",
    ],
    [
      "grain",
      "protein",
      "vegetable",
    ],
    [
      "grain",
      "vegetable",
    ],
    [
     "grain",
      "fruit",
    ],
    [
      "protein",
      "vegetable",
    ]
  ]
  ngOnInit(): void {
  }

}
