import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMoreComponent } from './travel-more.component';

describe('TravelMoreComponent', () => {
  let component: TravelMoreComponent;
  let fixture: ComponentFixture<TravelMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
