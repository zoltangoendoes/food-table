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
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  alma: Food = {
    name: 'alma',
    type: 'fruit',
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
    },
    {
      name: 'zabpehely',
      type: 'grain',
    },
  ];
  ngOnInit() {}
}
