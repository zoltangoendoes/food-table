import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FooditemComponent } from './fooditem/fooditem.component';
import { Foods, Food, foodType, FoodTypes, ingredients } from './foods';
import { MealCombinationComponent } from './meal-combination/meal-combination.component';
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['hello.component.css','./fooditem/fooditem.component.css'],
})

export class HelloComponent implements OnInit {
  @Input() name: string;
  foods = Foods.getInstance();
  days = {
    'monday': [],
    'tuesday': "",
    'wednesday': "",
    'thursday': "",
    'friday': "",
    'saturday': "",
    'sunday': "",
  }
  availableFoods: Food[] = [

  ];
  combination: any = "";

  sortBy(prop: string) {
    return this.availableFoods.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }

  sortListBy(list: any, prop: string) {
    return list.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }

  private filterFoodFor(type: foodType) {
    return this.availableFoods.filter((x) => x.type == type && x.introduced);
  }

  public combine = () => {

    this.combination = "";
    let ingredients = this.combineRandom();
    ingredients.forEach((f) => {
      this.combination += "(" + f.name + " " + f.type + ") - ";
    })
    return this.combination
  }

  public getByDay = () => {
    this.days.monday = this.combine()
    this.days.tuesday = this.combine()
    this.days.wednesday = this.combine()
    this.days.thursday = this.combine()
    this.days.friday = this.combine()
    this.days.saturday = this.combine()
    this.days.sunday = this.combine()
  }

  private pickRandom = (input: Array<any>) => {
    return input[Math.floor(Math.random() * input.length)];
  }

  private pickTypeRandom = (input: Array<Food>, type: foodType) => {
    if (!input) {
      //console.log("Tried to pick random with type: ", type, " but it input array was 0")
      return;

    }
    let ingredients = input.filter(x => x.introduced && x.type == type)
    let ingredient = this.pickRandom(ingredients);
    return ingredient;
  }
  private pushIfNotUndefined = (input: any[], elem: any) => {
    if (elem) {
      input.push(elem)
    } else {
      //console.log("tried to push undefined elem")
    }
  }
  private combineRandom = () => {
    // pick a combination
    let combination = this.pickRandom(MealCombinationComponent.mealcombinations);
    console.info(combination);
    let introduced_ingredients: Food[] = this.availableFoods.filter(x => x.introduced);
    let ingredient_1: Food = this.pickRandom(introduced_ingredients);
    let ingredients: Food[] = []
    ingredients.push(ingredient_1)
    console.info(ingredient_1.type);
    // case 1 - 1st ingredient is fruit
    FoodTypes.forEach((ft) => {
      if (ingredient_1.type == ft) {
        FoodTypes/*filter(x => x != ft)*/.forEach((item) => {
          let ingredient = this.pickTypeRandom(ingredient_1.combinableWith, item);
          this.pushIfNotUndefined(ingredients, ingredient);
        });
      }
    })

    return ingredients;
  }

  ngOnInit() {
    ingredients.forEach((i) => this.availableFoods.push(i));
    this.combination = "";
    this.getByDay();
  }
}
