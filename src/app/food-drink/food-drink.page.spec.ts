import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodDrinkPage } from './food-drink.page';

describe('FoodDrinkPage', () => {
  let component: FoodDrinkPage;
  let fixture: ComponentFixture<FoodDrinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDrinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
