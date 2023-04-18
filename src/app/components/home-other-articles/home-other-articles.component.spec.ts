import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOtherArticlesComponent } from './home-other-articles.component';

describe('HomeOtherArticlesComponent', () => {
  let component: HomeOtherArticlesComponent;
  let fixture: ComponentFixture<HomeOtherArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOtherArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOtherArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
