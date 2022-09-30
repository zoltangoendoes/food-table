import { Component, Input, OnInit } from '@angular/core';
import { Foods, Food } from './foods';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; } .combination-list{list-style:none}`],
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

  ngOnInit() {}
}
