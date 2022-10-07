import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooditemComponent } from './fooditem/fooditem.component';
import {MatTableModule} from '@angular/material/table';
import { MealCombinationComponent } from './meal-combination/meal-combination.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [AppComponent, HelloComponent, FooditemComponent, MealCombinationComponent],  
  bootstrap: [AppComponent],
})
export class AppModule {}
