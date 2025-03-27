import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmergencyInfoPage } from './emergency-info.page';

describe('EmergencyInfoPage', () => {
  let component: EmergencyInfoPage;
  let fixture: ComponentFixture<EmergencyInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
