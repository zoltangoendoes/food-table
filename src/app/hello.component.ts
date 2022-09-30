import { Component, Input, OnInit } from '@angular/core';
import { Foods, Food } from './foods';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; } .combination-list{list-style:none}`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  availableFoods: Food[] = [
    Foods.alma,
    Foods.sutotok,
    Foods.barack,
    Foods.zabpehely,
    Foods.krumpli,
    Foods.csirkemell,
  ];
  ngOnInit() {}
}
