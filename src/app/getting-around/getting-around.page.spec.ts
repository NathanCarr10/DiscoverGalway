import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GettingAroundPage } from './getting-around.page';

describe('GettingAroundPage', () => {
  let component: GettingAroundPage;
  let fixture: ComponentFixture<GettingAroundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingAroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
