import { Component, Input, OnInit } from '@angular/core';
import { Foods, Food, foodType } from './foods';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['hello.component.css'],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  foods = Foods.getInstance();
  availableFoods: Food[] = [
    this.foods.alma,
    this.foods.sutotok,
    this.foods.barack,
    this.foods.zabpehely,
    this.foods.krumpli,
    this.foods.csirkemell,
  ];

  sortBy(prop: string) {
    return this.availableFoods.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }

  private filterFoodFor(type: foodType) {
    return this.availableFoods.filter((x) => x.type == type);
  }

  combine() {
    let fruits = this.filterFoodFor('fruit');
    let grains = this.filterFoodFor('grain');
    let vegetables = this.filterFoodFor('vegetable');

    const random_fruit = fruits[Math.floor(Math.random() * fruits.length)];
    let meats = random_fruit.combinableWith.filter((f) => f.type == 'meat');
    console.log(meats);
    let meat = meats[Math.floor(Math.random() * meats.length)];

    /*if (random_1 === random_2) {
      console.error('ugyanaz');
    }*/
    console.log(random_fruit, meat);
  }

  ngOnInit() {
    this.combine();
  }
}
