import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCombinationComponent } from './meal-combination.component';

describe('MealCombinationComponent', () => {
  let component: MealCombinationComponent;
  let fixture: ComponentFixture<MealCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealCombinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
