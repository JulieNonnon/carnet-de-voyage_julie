import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelIntroComponent } from './travel-intro.component';

describe('TravelIntroComponent', () => {
  let component: TravelIntroComponent;
  let fixture: ComponentFixture<TravelIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
