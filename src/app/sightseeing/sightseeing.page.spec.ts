import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SightseeingPage } from './sightseeing.page';

describe('SightseeingPage', () => {
  let component: SightseeingPage;
  let fixture: ComponentFixture<SightseeingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SightseeingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
