import { Component, Input, OnInit } from '@angular/core';

type foodType = 'fruit' | 'vegetable' | 'grain' | 'meat' | 'other';
class Food {
  type: foodType;
  name: String;
  combinableWith?: Food[];
}
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; } .combination-list{list-style:none}`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  krumpli: Food = {
    name: 'krumpli',
    type: 'vegetable',
  };
  alma: Food = {
    name: 'alma',
    type: 'fruit',
    combinableWith: [
      this.krumpli,
      {
        name: 'zabpehely',
        type: 'grain',
      },
    ],
  };

  zabpehely: Food = {
    name: 'zabpehely',
    type: 'grain',
    combinableWith: [this.alma],
  };

  availableFoods: Food[] = [
    this.alma,
    {
      name: 'barack',
      type: 'fruit',
    },
    {
      name: 'krumpli',
      type: 'vegetable',
      combinableWith: [this.alma],
    },
    {
      name: 'sütőtök',
      type: 'vegetable',
    },
    {
      name: 'csirkemell',
      type: 'meat',
      combinableWith: [this.alma],
    },
    {
      name: 'zabpehely',
      type: 'grain',
      combinableWith: [this.alma],
    },
  ];
  ngOnInit() {}
}
