import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPitchComponent } from './travel-pitch.component';

describe('TravelPitchComponent', () => {
  let component: TravelPitchComponent;
  let fixture: ComponentFixture<TravelPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
