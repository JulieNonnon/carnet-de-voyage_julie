import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSumUpComponent } from './travel-sum-up.component';

describe('TravelSumUpComponent', () => {
  let component: TravelSumUpComponent;
  let fixture: ComponentFixture<TravelSumUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelSumUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelSumUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
