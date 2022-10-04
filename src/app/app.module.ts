import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooditemComponent } from './fooditem/fooditem.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule         
  ],
  declarations: [AppComponent, HelloComponent, FooditemComponent],  
  bootstrap: [AppComponent],
})
export class AppModule {}
